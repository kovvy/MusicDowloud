<aside id="xbody-side1">
    <ul class="stags">
        @foreach($genres as $genre)
            <li><a href="{{route('genre', ['name' => $genre['value']])}}">{{$genre['name']}}</a></li>
        @endforeach
    </ul>
</aside>