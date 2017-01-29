<?php

namespace App\Providers;

use App\Http\Controllers\Parser\Parser;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @param Parser $parser
     */
    public function boot(Parser $parser)
    {
        $genres = $parser->genresSongs();

        View::share('genres', $genres);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
