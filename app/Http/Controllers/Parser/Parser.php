<?php

namespace App\Http\Controllers\Parser;

use App\Http\Controllers\Parser\Request as SendRequestClass;
use phpQuery;
use Illuminate\Support\Facades\Log;

class Parser extends SendRequestClass
{
    const SEARCH_URL = 'search/f/';

    const TOP_URL = 'music_genre/';

    const SONG_URL = 'm/';

    const GENRES_URL = 'p/';

    private $document;

    public function mainPage()
    {
        $category = array(
            'Russian Top 10',
            'World Top 10',
            'Top 10'
        );
        $url = array();
        $result = array();

        $array = array_chunk($this->parsMusic(), 10);

        foreach ($this->document->find('.more_link > a') as $item) {
            $url[] = explode('/', pq($item)->attr('href'))[2];
        }

        if (empty($category) OR empty($url))
        {
            Log::error('Error parser. Category is empty!');
            abort(503);
        }

        for ($i = 0; $i < count($category); $i++)
        {
            $result[] = array(
                'name' => $category[$i],
                'url' => $url[$i],
                'songs' => $array[$i]
            );
        }

        if (empty($result))
        {
            Log::error('Error parser. Category is empty!');
            abort(503);
        }

        return $result;

    }

    public function topPage($category)
    {
        $this->setUrl(self::TOP_URL . $category);

        $array = $this->parsMusic();

        $array['title'] = $this->getTitle();

        return $array;

    }

    public function getSong($url, $currentSong = FALSE)
    {
        $this->setUrl(self::SONG_URL . $url);

        $array = $this->parsMusic();

        $document = pq($this->document);

        if ($currentSong)
        {
            $author = $document->find('.onesongblock-title > b')->text();

            $array['current_song'] = array(

                'author' => $author,
                'song_name' => $document->find('.onesongblock-title > em')->text(),
                'duration' => $document->find('.onesongblock-duration')->text(),
                'size' => $document->find('.onesongblock-filesize > b')->text(),
                'form' => $document->find('.onesongblock-ext > b')->text(),
                'text' => $document->find('.onesongblock-text')->text(),
                'listen' => $this->getData(pq($document->find('.onesongblock-btns > a.rtform-green'))),
                'download' => $document->find('.onesongblock-btns > a.rtform-blue')->attr('href')

            );
        } else {

            $array['pagination'] = $this->getPagination($document);

        }

        $array['title'] = isset($author) ? $author : $this->getTitle();

        return $array;

    }

    public function searchSong($string)
    {
        $this->setUrl(self::SEARCH_URL. $string);

        $array = $this->parsMusic();

        $array['title'] = $this->getTitle();

        return $array;

    }

    public function searchGenresSong($string)
    {
        $this->setUrl(self::GENRES_URL. $string);

        $array = $this->parsMusic();

        $array['title'] = $this->getTitle();

        return $array;

    }

    public function genresSongs()
    {
        $array = array();

        $this->parsMusic();

        $document = $this->document->find('#xbody-side1 > ul')->children('li');

        foreach ($document as $item) {

            $li = pq($item)->find('a');

            $array[] = array(
                'name' => $li->text(),
                'value' => explode('/', $li->attr('href'))[2]
            );
        }

        if (!isset($array))
        {
            Log::error('Error parser. Genres is empty!');
            abort(503);
        }

        return $array;

    }

    private function parsMusic()
    {
        $array = array();

        $document = $this->document = phpQuery::newDocument($this->getDocument());

        $playlist = $document->find('ul.playlist')->children('li');

        foreach ($playlist as $item) {

            $song = pq($item);

            $path = explode('/', parse_url($song->find('h2.playlist-name > em > a')->attr('href'), PHP_URL_PATH));

            $array[] = array(

                'data-id' => $song->attr('data-id'),
                'data-mp3' => $song->attr('data-mp3'),
                'data-index' => $song->attr('data-index'),
                'data-url_song' => $song->attr('data-url_song'),
                'data-duration' => $song->attr('data-duration'),
                'download-url' => $song->find('.playlist-btn > a.playlist-btn-down')->attr('href'),

                'duration' => $song->find('em > span.playlist-duration')->text(),

                'artist-url' => isset($path[2]) ? $path[2] : NULL,
                'artist-name' => $song->find('h2.playlist-name > b > a')->text(),

                'song-url' => isset($path[3]) ? $path[3] : NULL,
                'song-name' => $song->find('h2.playlist-name > em > a')->text(),

            );

        }

        if (empty($array))
        {
            Log::error('Error parser. Array is empty!');
            abort(503);
        }

        return $array;

    }

    private function getTitle()
    {
        $document = $this->document;

        return $document->find('h1.title')->text();

    }

    private function getData($song)
    {
        return array(
            'data-id' => $song->attr('data-id'),
            'data-mp3' => $song->attr('data-mp3'),
            'data-index' => $song->attr('data-index'),
            'data-url_song' => $song->attr('data-url_song'),
            'data-duration' => $song->attr('data-duration'),
        );
    }

    private function getPagination($document)
    {
        return array(
            'count' => $document->find('.listalka')->children('li')->count(),
            'current_page' => pq(array_pop($document->find('.listalka > li > em')->elements))->text()
        );
    }

}