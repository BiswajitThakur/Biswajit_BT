<?php

   $bn = $_POST['bn'];
   $en = $_POST['en'];
   $pass = $_POST['password'];
 if (password_verify($pass , '$2y$10$pVFAc8/i232xeo5nw1i70uVPDXEROmt/Fg4/UgXpt0Sw0rKIKbRWq')){
       // password = '12345bt';
   $myFile = "./../../data/noun.json";
   $arr_data = array();
  try
  {
	   $formdata = array(
	      'bn'=> $bn,
	      'en'=> $en
	   );
	   $jsondata = file_get_contents($myFile);
	   $arr_data = json_decode($jsondata, true);
       array_push($arr_data,$formdata);
       $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   if(file_put_contents($myFile, $jsondata)) {
	       echo 'successfully added';
	    }
	   else 
	        echo "<h1><center>error</center></h1>";
   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }
  } else {
      echo 'wrong password!!';
  }

?>