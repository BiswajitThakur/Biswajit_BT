<?php

   $bn = $_POST['bn'];
   $v1 = $_POST['v1'];
   $v2 = $_POST['v2'];
   $v3 = $_POST['v3'];
   $pass = $_POST['password'];
   
/*
**   password_hash('password', PASSWORD_DEFAULT);
*/
 if (password_verify($pass , '$2y$10$pVFAc8/i232xeo5nw1i70uVPDXEROmt/Fg4/UgXpt0Sw0rKIKbRWq')){
   $myFile = "./../../data/verbs.json";
   $arr_data = array(); // create empty array
  try
  {
	   //Get form data
	   $formdata = array(
	      'bn'=> $bn,
	      'v1'=> $v1,
	      'v2'=> $v2,
	      'v3'=> $v3
	   );

	   //Get data from existing json file
	   $jsondata = file_get_contents($myFile);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);

	   // Push user data to array
	   array_push($arr_data,$formdata);

       //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents($myFile, $jsondata)) {
           echo "successfully added.";
	 /*       $myff = fopen("./sv.html", "r") or die("wrong password!");
	        echo fread($myff,filesize("./sv.html"));
	        fclose($myff);
	  */
	    }
	   else 
	        echo "<h1><center>error</center></h1>";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }
  } else {
     echo "wrong password!";
  }
  
  
?>