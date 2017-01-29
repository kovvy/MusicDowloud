@extends('layouts.layouts')
@section('content')
    <div id="xbody">
        <aside id="xbody-content">
            <div id="main_page_songs">

                <div class="xblock">
                    <h2 class="title">{{$songs['title']}}</h2>

                    <ul class="playlist">
                        @foreach($songs as $song)
                            @if(!empty($song['data-id']))
                                <li class="track" data-index="{{$song['data-index']}}" data-id="{{$song['data-id']}}" data-mp3="{{$song['data-mp3']}}" data-url_song="{{$song['data-url_song']}}" data-duration="{{$song['data-duration']}}">

                                    <div class="playlist-btn">
                                        <a href="javascript:void(0);" class="playlist-btn-play playlist-btn-playback no-ajaxy" title="слушать онлайн">(слушать онлайн)</a>
                                        <a href="{{$song['download-url']}}" class="playlist-btn-down no-ajaxy" title="скачать" target="_blank">(скачать)</a>
                                    </div>

                                    <em>
                                        <a href="javascript:void(0);" class="playlist-btn-addfav no-ajaxy" title="добавить в избранное (плейлист)"></a>

                                        <span class="playlist-duration">{{$song['duration']}}</span>
                                    </em>
                                    <a href="javascript:void(0);" class="rbt-list hide" target="_blank" rel="nofollow"></a>

                                    <h2 class="playlist-name">
                                        <b><a href="{{$song['artist-url']}}">{{$song['artist-name']}}</a></b>
                                        <i>–</i>
                                        <em><a href="{{$song['song-url']}}">{{$song['song-name']}}</a></em>
                                    </h2>
                                </li>
                            @endif
                        @endforeach
                    </ul>

                <div class="rbt_offer"></div>
            </div>

        </aside>

        @include('templates.genres')

    </div>
@stop