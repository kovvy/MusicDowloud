<header id="header">
    <div id="header_x1">

        <!--he-logo -->
        <a href="{{route('home')}}" id="he-logo"><img src="/pictures/he-logo.png" alt="MP3.cc"></a>
        <!-- / he-logo -->

        <!-- user_block -->
        <div id="user_block">
            <a href="javascript:void(0);" id="user_block-xx" class="off"><i>Гость</i></a>

            <ul id="user_block-ul">
                <li><a href="http://mp3.cc/fav/" class="zz__icon-userblock_fav">Моё избранное (0)</a></li>


                <li><a href="http://mp3.cc/registration/" class="zz__icon-userblock_reg">Регистрация</a></li>
                <li><a href="http://mp3.cc/authorization/" class="zz__icon-userblock_enter">Вход</a></li>

            </ul>
        </div>
        <!-- / user_block -->

        <form id="he-search" action="/api/search" method="post">
            <div id="he-search_x1">
                <input name="q" id="he-search-text" placeholder="Поиск — введите название песни или исполнителя" type="text">
                <input id="he-search-submit" value="" type="submit">

                <a href="#" class="hidden" id="search-submitter"></a>
            </div>
        </form>

    </div>
</header>
