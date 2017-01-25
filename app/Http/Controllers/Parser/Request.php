<?php

namespace App\Http\Controllers\Parser;

use hQuery;

class Request
{
    const BASE_URL = 'http://mp3.cc/';

    private $url = self::BASE_URL;

    private $headers;

    private $body;

    private $options;

    protected function getDocument()
    {
        try {

            $document = hQuery::fromUrl($this->url, $this->headers, $this->body, $this->options);

        } catch (\Exception $e) {
            dd($e);
        }

        if (!$document)
        {
            abort(404);
        }

        return $document;

    }

    protected function setUrl($url)
    {
        $this->url = self::BASE_URL . $url;
    }

    protected function setHeaders(array $headers)
    {
        foreach ($headers as $name => $value) {
            $this->headers[$name] = $value;
        }
    }

    protected function setBody($body)
    {
        foreach ($body as $name => $value) {
            $this->$body[$name] = $value;
        }
    }

    protected function setOptions(array $options)
    {
        foreach ($options as $name => $value) {
            $this->$options[$name] = $value;
        }
    }
}