@extends('layouts.layouts')
@section('content')
    <div id="xbody">
        <aside id="xbody-content">
            <div id="main_page_songs">

                @if(isset($songs['current_song']))

                    <div class="onesongblock">
                        <!-- onesongblock-tit_and_dur -->
                        <div class="onesongblock-tit_and_dur">
                            <h1 class="onesongblock-title">
                                <b>{{$songs['current_song']['author']}}</b>
                                <i>–</i>
                                <em>{{$songs['current_song']['song_name']}}</em>
                            </h1>

                            <span class="onesongblock-duration">{{$songs['current_song']['duration']}}</span>
                        </div>
                        <!-- / onesongblock-tit_and_dur -->
                        <span class="onesongblock-filesize">Размер: <b>{{$songs['current_song']['size']}}</b></span><br />
                        <span class="onesongblock-ext">Формат: <b>{{$songs['current_song']['form']}}</b></span><br />
                        <br /><span class="onesongblock-text">{{$songs['current_song']['text']}}</span><br />


                        <!-- onesongblock-btns -->
                        <div class="onesongblock-btns">
                            <a href="javascript:void(0);" class="psv_btn rtform-green" data-id="{{$songs['current_song']['listen']['data-id']}}" data-mp3="{{$songs['current_song']['listen']['data-mp3']}}" data-duration="{{$songs['current_song']['listen']['data-duration']}}" data-url_song="{{$songs['current_song']['listen']['data-url_song']}}">Слушать онлайн</a>
                            <a href="{{$songs['current_song']['download']}}" class="psv_btn rtform-blue">Скачать</a>
                            <a class="psv_btn rtform-red rbt-card hide-rbt" rel="nofollow">На гудок</a>
                        </div>
                        <!-- / onesongblock-btns -->

                        <!-- onesongblock-share_block -->

                        <!-- / onesongblock-share_block -->
                    </div>



                    <div class="rbt_offer"></div>


                @endif

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
                                        <b><a href="{{route('music', ['author' => $song['artist-url']])}}">{{$song['artist-name']}}</a></b>
                                        <i>–</i>
                                        <em><a href="{{route('music', ['author' => $song['artist-url'], 'song' => $song['song-url']])}}">{{$song['song-name']}}</a></em>
                                    </h2>
                                </li>
                            @endif
                        @endforeach
                    </ul>

                    @if(isset($songs['pagination']) AND $songs['pagination']['count'])
                        @php
                            $count = (int)($songs['pagination']['count'] - 2)
                        @endphp
                        <ul class="listalka">
                            @for($i = 1; $i < $count; $i++)
                                @if($songs['pagination']['current_page'] == $i)
                                    <li>
                                        <em>{{$i}}</em>
                                    </li>
                                @else
                                    <li>
                                        <a href="{{route('authorPaginate', ['author' => $author, 'pageNumber' => $i])}}">{{$i}}</a>
                                    </li>
                                @endif
                            @endfor
                        </ul>
                    @endif

                    <div class="rbt_offer"></div>
                </div>

        </aside>

        @include('templates.genres')

    </div>
@stop