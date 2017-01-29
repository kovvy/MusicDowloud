<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Parser\Parser;

class MusicController extends Controller
{
    public function index(Parser $parser)
    {
        $categories = $parser->mainPage();

        return view('music.main', ['categories' => $categories]);
    }

    public function top($category, Parser $parser)
    {
        $songs = $parser->topPage($category);

        return view('music.top', ['songs' => $songs]);
    }

    public function music($author, $song = NULL, $pageNumber = NULL)
    {
        $currentSong = FALSE;
        $url = $author . '/';

        if (!array_key_exists('song', \Route::current()->parameters()) AND $song AND !$pageNumber)
        {
            $pageNumber = $song;
            $song = NULL;
        }

        if ($song)
        {
            $url .= $song . '/';
            $currentSong = TRUE;
        }

        if ($pageNumber)
        {
            $url .= 'page/' . $pageNumber . '/';
        }

        $parser = new Parser();
        $songs = $parser->getSong($url, $currentSong);

        return view('music.songs', ['songs' => $songs, 'author' => $author]);
    }
}
