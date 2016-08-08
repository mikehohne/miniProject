<?php

// endpoints!

$urlEndPoint = 'https://testapi.pfl.com/' . $_GET['endPoint'] . '?apikey=136085';

// methods, headers and what would be data to post

$opts = array(
  'http'=>array(
    'method'=>$_GET['method'],
    'body' => $_GET['data'],
    'header'=>"Authorization: Basic bWluaXByb2plY3Q6UHIhbnQxMjM=\r\n"
  )
);


// a serialization of data below

$context = stream_context_create($opts);

// getting the contents of the call

$content=file_get_contents($urlEndPoint,FALSE,$context);

// putting this on the php page which is called in from the frontend using $http

echo $content;


?>
