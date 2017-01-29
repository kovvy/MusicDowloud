<!DOCTYPE html>
<html id="desktop">
<head>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>MP3.cc - Скачать Музыку и Песни Бесплатно в Mp3 и слушать онлайн | MP3.cc</title>
    <meta name="description" content="Музыкальный mp3-портал MP3.cc с быстрым поиском композиций. Здесь Вы можете бесплатно скачать любимые песни и музыку в mp3 качестве, а также слушать их онлайн.">
    <meta name="keywords" content="песни, музыка, скачать, бесплатно, слушать, онлайн, mp3, поиск">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="search" type="application/opensearchdescription+xml" title="MP3.cc" href="http://mp3.cc/i/etc/opensearch.xml">

    <meta property="og:site_name" content="MP3.cc">
    <meta property="og:image" content="http://mp3.cc/i/img/site_prw0002.png">
    <meta property="og:type" content="music.song">
    <meta property="og:url" content="{{route('home')}}">
    <meta property="og:title" content="Самые популярные песни">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>

    <link rel="stylesheet" href="/css/main.css">

    <script src="/js/main.js"></script>

</head>

<body data-playlist-url="/fav/" data-show-fav-tips="true" class="">

<div id="xx1" style="opacity: 100;">
    <div id="player-page-title" class="hidden">
        <b></b>
        <span>Самые популярные песни</span>
    </div>

    @include('templates.header')

    <div class="rtform" id="xx2">

        <div id="main_menu">
            <ul>
                <li><a href="{{route('home')}}" id="main_menu-home"><i>Home</i></a></li>
                <li><a href="{{route('top', ['category' => 'popular'])}}" id="main_menu-top_world"><i>Top 100</i></a></li>
                <li><a href="{{route('top', ['category' => 'russian_top'])}}" id="main_menu-top_rus"><i>Russian Top 100</i></a></li>
                <li><a href="{{route('top', ['category' => 'world_top'])}}" id="main_menu-top_world"><i>World Top 100</i></a></li>
            </ul>
        </div>

        @yield('content')

    </div>

    @include('templates.footer')

</div>

    @include('templates.player')

</body>
</html>