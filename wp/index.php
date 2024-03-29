<?php

$html_file = 'index.html';
if (file_exists($html_file)) {
    header('Content-Type: text/html');
    readfile($html_file);
} else {
    http_response_code(404);
    echo '404 Not Found';
}

?>