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

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $this->url);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

        if ($method == 'POST' AND !empty($this->body))
        {
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $this->body);
        }

        $content = curl_exec($ch);
        $err     = curl_errno($ch);
        $errmsg  = curl_error($ch);
        $header  = curl_getinfo($ch);

        curl_close($ch);

        if ($err !== 0)
        {
            Log::error($errmsg);
            abort(503);
        } elseif (!$content)
        {
            Log::error('Error cURL. Content is empty!');
            abort(503);
        }

        return $content;

    }
}