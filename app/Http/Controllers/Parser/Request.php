<?php

namespace App\Http\Controllers\Parser;

use Illuminate\Support\Facades\Log;

class Request
{
    const BASE_URL = 'http://mp3.cc/';

    private $url = self::BASE_URL;

    private $body;

    protected function setUrl($url)
    {
        $this->url = self::BASE_URL . $url;
    }

    protected function setBody(array $body)
    {
        foreach ($body as $name => $value) {
            $this->body[$name] = $value;
        }
    }

    protected function getDocument($method = 'GET')
    {
        set_time_limit(180);

        $proxy = '178.54.44.24:8080';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->url);
        curl_setopt($ch, CURLOPT_PROXY, $proxy);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//        curl_setopt($ch, CURLOPT_TIMEOUT, 200);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
//        curl_setopt($ch, CURLOPT_MAXREDIRS, 2);
        curl_setopt($ch, CURLOPT_USERAGENT,
            "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.7) Gecko/20070914 Firefox/2.0.0.7");
        curl_setopt($ch, CURLOPT_COOKIEJAR, "cookies.txt");
        curl_setopt($ch, CURLOPT_COOKIEFILE, "cookies.txt");
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_ENCODING, "gzip");

        $data = curl_exec($ch);
        curl_close($ch);

        if (!$data)
        {
            Log::error('Error query');
            abort(503);
        }

        return $data;

    }
}