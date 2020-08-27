'use strict';


function rplc(t,txts){
	if ( Array.isArray(txts) && true ) {
	   if ( txts.length == 52 ) {
	     return t
.replace(/\u0041/g,txts[0]).replace(/\u0042/g,txts[1])
.replace(/\u0043/g,txts[2]).replace(/\u0044/g,txts[3])
.replace(/\u0045/g,txts[4]).replace(/\u0046/g,txts[5])
.replace(/\u0047/g,txts[6]).replace(/\u0048/g,txts[7])
.replace(/\u0049/g,txts[8]).replace(/\u004a/g,txts[9])
.replace(/\u004b/g,txts[10]).replace(/\u004c/g,txts[11])
.replace(/\u004d/g,txts[12]).replace(/\u004e/g,txts[13])
.replace(/\u004f/g,txts[14]).replace(/\u0050/g,txts[15])
.replace(/\u0051/g,txts[16]).replace(/\u0052/g,txts[17])
.replace(/\u0053/g,txts[18]).replace(/\u0054/g,txts[19])
.replace(/\u0055/g,txts[20]).replace(/\u0056/g,txts[21])
.replace(/\u0057/g,txts[22]).replace(/\u0058/g,txts[23])
.replace(/\u0059/g,txts[24]).replace(/\u005a/g,txts[25])
.replace(/\u0061/g,txts[26]).replace(/\u0062/g,txts[27])
.replace(/\u0063/g,txts[28]).replace(/\u0064/g,txts[29])
.replace(/\u0065/g,txts[30]).replace(/\u0066/g,txts[31])
.replace(/\u0067/g,txts[32]).replace(/\u0068/g,txts[33])
.replace(/\u0069/g,txts[34]).replace(/\u006a/g,txts[35])
.replace(/\u006b/g,txts[36]).replace(/\u006c/g,txts[37])
.replace(/\u006d/g,txts[38]).replace(/\u006e/g,txts[39])
.replace(/\u006f/g,txts[40]).replace(/\u0070/g,txts[41])
.replace(/\u0071/g,txts[42]).replace(/\u0072/g,txts[43])
.replace(/\u0073/g,txts[44]).replace(/\u0074/g,txts[45])
.replace(/\u0075/g,txts[46]).replace(/\u0076/g,txts[47])
.replace(/\u0077/g,txts[48]).replace(/\u0078/g,txts[49])
.replace(/\u0079/g,txts[50]).replace(/\u007a/g,txts[51]);
} else if ( txts.length == 62 ) {
           return t
.replace(/\u0041/g,txts[0]).replace(/\u0042/g,txts[1])
.replace(/\u0043/g,txts[2]).replace(/\u0044/g,txts[3])
.replace(/\u0045/g,txts[4]).replace(/\u0046/g,txts[5])
.replace(/\u0047/g,txts[6]).replace(/\u0048/g,txts[7])
.replace(/\u0049/g,txts[8]).replace(/\u004a/g,txts[9])
.replace(/\u004b/g,txts[10]).replace(/\u004c/g,txts[11])
.replace(/\u004d/g,txts[12]).replace(/\u004e/g,txts[13])
.replace(/\u004f/g,txts[14]).replace(/\u0050/g,txts[15])
.replace(/\u0051/g,txts[16]).replace(/\u0052/g,txts[17])
.replace(/\u0053/g,txts[18]).replace(/\u0054/g,txts[19])
.replace(/\u0055/g,txts[20]).replace(/\u0056/g,txts[21])
.replace(/\u0057/g,txts[22]).replace(/\u0058/g,txts[23])
.replace(/\u0059/g,txts[24]).replace(/\u005a/g,txts[25])
.replace(/\u0061/g,txts[26]).replace(/\u0062/g,txts[27])
.replace(/\u0063/g,txts[28]).replace(/\u0064/g,txts[29])
.replace(/\u0065/g,txts[30]).replace(/\u0066/g,txts[31])
.replace(/\u0067/g,txts[32]).replace(/\u0068/g,txts[33])
.replace(/\u0069/g,txts[34]).replace(/\u006a/g,txts[35])
.replace(/\u006b/g,txts[36]).replace(/\u006c/g,txts[37])
.replace(/\u006d/g,txts[38]).replace(/\u006e/g,txts[39])
.replace(/\u006f/g,txts[40]).replace(/\u0070/g,txts[41])
.replace(/\u0071/g,txts[42]).replace(/\u0072/g,txts[43])
.replace(/\u0073/g,txts[44]).replace(/\u0074/g,txts[45])
.replace(/\u0075/g,txts[46]).replace(/\u0076/g,txts[47])
.replace(/\u0077/g,txts[48]).replace(/\u0078/g,txts[49])
.replace(/\u0079/g,txts[50]).replace(/\u007a/g,txts[51])
.replace(/\u0030/g,txts[52]).replace(/\u0031/g,txts[53])
.replace(/\u0032/g,txts[54]).replace(/\u0033/g,txts[55])
.replace(/\u0034/g,txts[56]).replace(/\u0035/g,txts[57])
.replace(/\u0036/g,txts[58]).replace(/\u0037/g,txts[59])
.replace(/\u0038/g,txts[60]).replace(/\u0039/g,txts[61]);
	   } else { return undefined; }
    } else { return undefined; }
};
//alert(rplc("BiswajitThakur",txts[0]))


function myTxt(arr){

let i = document.getElementById('input1');

function s(arr){
document.getElementById(arr.id).innerHTML=rplc(i.value,arr.txt);
   };
  /*document.getElementById('outp10').innerHTML=(function(a){let b='';for(let k=a.length-1;k>=0;k--){b+=k;}return b;}(rplc(i.value,txts[9])));*/
   s({id:"outp1",txt:txts[0]});
   s({id:"outp2",txt:txts[1]});
   s({id:"outp3",txt:txts[2]});
   s({id:"outp4",txt:txts[3]});
   s({id:"outp5",txt:txts[4]});
   s({id:"outp6",txt:txts[5]});
   s({id:"outp7",txt:txts[6]});
   s({id:"outp8",txt:txts[7]});
   s({id:"outp9",txt:txts[8]});
   s({id:"outp10",txt:txts[9]});
   s({id:"outp11",txt:txts[10]});
   s({id:"outp12",txt:txts[11]});
   s({id:"outp13",txt:txts[12]});
   s({id:"outp14",txt:txts[13]});
   s({id:"outp15",txt:txts[14]});
   s({id:"outp16",txt:txts[15]});
   s({id:"outp17",txt:txts[16]});
   s({id:"outp18",txt:txts[17]});
   s({id:"outp19",txt:txts[18]});
   s({id:"outp20",txt:txts[19]});
   s({id:"outp21",txt:txts[20]});
   s({id:"outp22",txt:txts[21]});
   s({id:"outp23",txt:txts[22]});
   s({id:"outp24",txt:txts[23]});
   s({id:"outp25",txt:txts[24]});
   s({id:"outp26",txt:txts[25]});
   s({id:"outp27",txt:txts[26]});
   s({id:"outp28",txt:txts[27]});
   s({id:"outp29",txt:txts[28]});
   s({id:"outp30",txt:txts[29]});
   s({id:"outp31",txt:txts[30]});
   s({id:"outp32",txt:txts[31]});
   s({id:"outp33",txt:txts[32]});
   s({id:"outp34",txt:txts[33]});
   s({id:"outp35",txt:txts[34]});
   s({id:"outp36",txt:txts[35]});
   s({id:"outp37",txt:txts[36]});
   s({id:"outp38",txt:txts[37]});
   s({id:"outp39",txt:txts[38]});
   s({id:"outp40",txt:txts[39]});
   s({id:"outp41",txt:txts[40]});
   s({id:"outp42",txt:txts[41]});
   s({id:"outp43",txt:txts[42]});
   s({id:"outp44",txt:txts[43]});
   s({id:"outp45",txt:txts[44]});
   s({id:"outp46",txt:txts[45]});
   s({id:"outp47",txt:txts[46]});
   s({id:"outp48",txt:txts[47]});
   s({id:"outp49",txt:txts[48]});
   s({id:"outp50",txt:txts[49]});
   s({id:"outp51",txt:txts[50]});
   s({id:"outp52",txt:txts[51]});
   s({id:"outp53",txt:txts[52]});
   s({id:"outp54",txt:txts[53]});
   s({id:"outp55",txt:txts[54]});
   s({id:"outp56",txt:txts[55]});
   s({id:"outp57",txt:txts[56]});
   s({id:"outp58",txt:txts[57]});
   s({id:"outp59",txt:txts[58]});
   s({id:"outp60",txt:txts[59]});
   s({id:"outp61",txt:txts[60]});
   s({id:"outp62",txt:txts[61]});
   s({id:"outp63",txt:txts[62]});
   s({id:"outp64",txt:txts[63]});
   s({id:"outp65",txt:txts[64]});
   s({id:"outp66",txt:txts[65]});
   s({id:"outp67",txt:txts[66]});
   s({id:"outp68",txt:txts[67]});
   s({id:"outp69",txt:txts[68]});
   s({id:"outp70",txt:txts[69]});
   s({id:"outp71",txt:txts[70]});
   s({id:"outp72",txt:txts[71]});
   s({id:"outp73",txt:txts[72]});
   s({id:"outp74",txt:txts[73]});
   s({id:"outp75",txt:txts[74]});
   
}


/*
try { !function(){
window.document.getElementById('input1').oninput=()=>{
document.getElementById('outp1').innerHTML=`${rplc(document.getElementById('input1').value,st1)}`;

} catch (error){};*/