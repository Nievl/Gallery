<?php

require_once __DIR__ . '/router.php';

get('/', './index.php');

get('/albums', 'albums/albums.php');

get('/test','test.php');


?>