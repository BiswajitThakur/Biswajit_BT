<?php header("Content-type: text/html"); ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="author" content="Biswajit Thakur" />
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<link rel="stylesheet" href="../src/css/verbs.css">
<title>list of verbs</title>
<script>
const myFu =()=>{
    let input = document.getElementById("myInput").value.toUpperCase();
    let tr = document.getElementsByTagName("tr");
    let v1 = (n) => tr[n].getElementsByTagName("td")[2].innerHTML.toUpperCase();
    let v2 = (n) => tr[n].getElementsByTagName("td")[3].innerHTML.toUpperCase();
    let v3 = (n) => tr[n].getElementsByTagName("td")[4].innerHTML.toUpperCase();
    
for(let y=1;y<tr.length;y++){
  if ((v1(y).indexOf(input)>-1)||(v2(y).indexOf(input)>-1)||(v3(y).indexOf(input)>-1)){
         tr[y].style.display = "";
    } else {
         tr[y].style.display = "none";
     }
   }
 };
</script>
</head>
<body>
<input type="text" id="myInput" onkeyup="myFu()">
<table class="hovertable"><tr><th>S.no</th><th>bengali</th><th>present tense</th><th>past tense</th><th>past participle</th></tr>
<?php
$data = json_decode(file_get_contents('./../data/verbs.json'));

  for($a=0;$a<count($data);$a++){
    echo "<tr><td style=\"color:yellow;\">".($a+1)."</td><td id=\"bn\">".$data[$a]->bn."</td><td>".$data[$a]->v1."</td><td>".$data[$a]->v2."</td><td>".$data[$a]->v3."</td></tr>\n";
  }
?>
</table>
</body>
</html>