<?php

namespace app\Http\Controllers\Parser;

use hQuery;

class RequestController
{
    const BASE_URL = 'http://mp3.cc/';

    private $headers = [];

    protected function getDocument(array $options = NULL, $body = NULL)
    {
        $document = hQuery::fromUrl(self::BASE_URL, $this->headers);

        if (!$document)
        {
            abort(404);
        }

        return $document;

    }
}