<?php

$srsearch =urlencode($_POST['pesquisa']);

consultaAPI("https://www.mediawiki.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=".$srsearch);

function consultaAPI($link){

    $ch = curl_init($link);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $response = curl_exec($ch);

    curl_close($ch);

    echo $response;
}

?>