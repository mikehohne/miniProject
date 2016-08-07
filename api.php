<?php

$urlEndPoint = 'https://testapi.pfl.com/' . $_GET['endPoint'] . '?apikey=136085';

$opts = array(
  'http'=>array(
    'method'=>$_GET['method'],
    'header'=>"Authorization: Basic bWluaXByb2plY3Q6UHIhbnQxMjM=\r\n"
  )
);

$context = stream_context_create($opts);

$content=file_get_contents($urlEndPoint,FALSE,$context);

echo $content;


?>
