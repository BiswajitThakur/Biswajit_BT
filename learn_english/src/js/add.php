<?php
header("Content-type: text/javascript");

if($_GET['q']=="verbs"){
 echo "let arr_verbs = `".file_get_contents('./../../data/verbs.json')."`;";
 } elseif ($_GET['q']=="noun"){
 echo "let arr_noun = `".file_get_contents('./../../data/noun.json')."`;";
 }
 ?>