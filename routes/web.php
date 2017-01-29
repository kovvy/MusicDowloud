<?php

//Auth::routes();

Route::get('/', ['as' => 'home', 'uses' => 'MusicController@index']);
Route::get('/top/{category}', ['as' => 'top', 'uses' => 'MusicController@top']);
Route::get('/music/{author}/{song?}', ['as' => 'music', 'uses' => 'MusicController@music']);
Route::get('/music/{author}/page/{pageNumber}', ['as' => 'authorPaginate', 'uses' => 'MusicController@music']);