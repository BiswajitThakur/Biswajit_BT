'use strict';

function u(a,b){
  let arr;
  let arr2 = ["\u0041","\u0042","\u0043","\u0044","\u0045","\u0046","\u0047","\u0048","\u0049","\u004A","\u004B","\u004C","\u004D","\u004E","\u004F","\u0050","\u0051","\u0052","\u0053","\u0054","\u0055","\u0056","\u0057","\u0058","\u0059","\u005A","\u0061","\u0062","\u0063","\u0064","\u0065","\u0066","\u0067","\u0068","\u0069","\u006A","\u006B","\u006C","\u006D","\u006E","\u006F","\u0070","\u0071","\u0072","\u0073","\u0074","\u0075","\u0076","\u0077","\u0078","\u0079","\u007A","\u0030","\u0031","\u0032","\u0033","\u0034","\u0035","\u0036","\u0037","\u0038","\u0039"]
    if(a=='' && b!=''){
        arr = arr2.map(x=>`${x}${b}`);
    } else if (a!='' && b==''){
        arr = arr2.map(x=>`${a}${x}`);
    } else if(a!='' && b!=''){
        arr = arr2.map(x=>`${a}${x}${b}`);
    } else { return false;} return arr;
};
/*
function unc(theString) {
            let unicodeString = '';
              for (let i=0;i<theString.length;i++) {
       let theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
           while (theUnicode.length < 4) {
               theUnicode = '0' + theUnicode;
            }
          theUnicode = '\\u' + theUnicode;
          unicodeString += theUnicode;
            }
         return unicodeString;
       }
*/



const txts = [

[ "\uD83C\uDDE6\u00A0",
  "\uD83C\uDDE7\u00A0",
  "\uD83C\uDDE8\u00A0",
  "\uD83C\uDDE9\u00A0",
  "\uD83C\uDDEA\u00A0",
  "\uD83C\uDDEB\u00A0",
  "\uD83C\uDDEC\u00A0",
  "\uD83C\uDDED\u00A0",
  "\uD83C\uDDEE\u00A0",
  "\uD83C\uDDEF\u00A0",
  "\uD83C\uDDF0\u00A0",
  "\uD83C\uDDF1\u00A0",
  "\uD83C\uDDF2\u00A0",
  "\uD83C\uDDF3\u00A0",
  "\uD83C\uDDF4\u00A0",
  "\uD83C\uDDF5\u00A0",
  "\uD83C\uDDF6\u00A0",
  "\uD83C\uDDF7\u00A0",
  "\uD83C\uDDF8\u00A0",
  "\uD83C\uDDF9\u00A0",
  "\uD83C\uDDFA\u00A0",
  "\uD83C\uDDFB\u00A0",
  "\uD83C\uDDFC\u00A0",
  "\uD83C\uDDFD\u00A0",
  "\uD83C\uDDFE\u00A0",
  "\uD83C\uDDFF\u00A0",
  "\uD83C\uDDE6\u00A0",
  "\uD83C\uDDE7\u00A0",
  "\uD83C\uDDE8\u00A0",
  "\uD83C\uDDE9\u00A0",
  "\uD83C\uDDEA\u00A0",
  "\uD83C\uDDEB\u00A0",
  "\uD83C\uDDEC\u00A0",
  "\uD83C\uDDED\u00A0",
  "\uD83C\uDDEE\u00A0",
  "\uD83C\uDDEF\u00A0",
  "\uD83C\uDDF0\u00A0",
  "\uD83C\uDDF1\u00A0",
  "\uD83C\uDDF2\u00A0",
  "\uD83C\uDDF3\u00A0",
  "\uD83C\uDDF4\u00A0",
  "\uD83C\uDDF5\u00A0",
  "\uD83C\uDDF6\u00A0",
  "\uD83C\uDDF7\u00A0",
  "\uD83C\uDDF8\u00A0",
  "\uD83C\uDDF9\u00A0",
  "\uD83C\uDDFA\u00A0",
  "\uD83C\uDDFB\u00A0",
  "\uD83C\uDDFC\u00A0",
  "\uD83C\uDDFD\u00A0",
  "\uD83C\uDDFE\u00A0",
  "\uD83C\uDDFF\u00A0" ],[
  "\u24B6","\u24B7",
  "\u24B8","\u24B9",
  "\u24BA","\u24BB",
  "\u24BC","\u24BD",
  "\u24BE","\u24BF",
  "\u24C0","\u24C1",
  "\u24C2","\u24C3",
  "\u24C4","\u24C5",
  "\u24C6","\u24C7",
  "\u24C8","\u24C9",
  "\u24CA","\u24CB",
  "\u24CC","\u24CD",
  "\u24CE","\u24CF",
  "\u24D0","\u24D1",
  "\u24D2","\u24D3",
  "\u24D4","\u24D5",
  "\u24D6","\u24D7",
  "\u24D8","\u24D9",
  "\u24DA","\u24DB",
  "\u24DC","\u24DD",
  "\u24DE","\u24DF",
  "\u24E0","\u24E1",
  "\u24E2","\u24E3",
  "\u24E4","\u24E5",
  "\u24E6","\u24E7",
  "\u24E8","\u24E9",
  "\u24EA","\u2460",
  "\u2461","\u2462",
  "\u2463","\u2464",
  "\u2465","\u2466",
  "\u2467","\u2468" ],[
  "\uD83C\uDD50",
  "\uD83C\uDD51",
  "\uD83C\uDD52",
  "\uD83C\uDD53",
  "\uD83C\uDD54",
  "\uD83C\uDD55",
  "\uD83C\uDD56",
  "\uD83C\uDD57",
  "\uD83C\uDD58",
  "\uD83C\uDD59",
  "\uD83C\uDD5A",
  "\uD83C\uDD5B",
  "\uD83C\uDD5C",
  "\uD83C\uDD5D",
  "\uD83C\uDD5E",
  "\uD83C\uDD5F",
  "\uD83C\uDD60",
  "\uD83C\uDD61",
  "\uD83C\uDD62",
  "\uD83C\uDD63",
  "\uD83C\uDD64",
  "\uD83C\uDD65",
  "\uD83C\uDD66",
  "\uD83C\uDD67",
  "\uD83C\uDD68",
  "\uD83C\uDD69",
  "\uD83C\uDD50",
  "\uD83C\uDD51",
  "\uD83C\uDD52",
  "\uD83C\uDD53",
  "\uD83C\uDD54",
  "\uD83C\uDD55",
  "\uD83C\uDD56",
  "\uD83C\uDD57",
  "\uD83C\uDD58",
  "\uD83C\uDD59",
  "\uD83C\uDD5A",
  "\uD83C\uDD5B",
  "\uD83C\uDD5C",
  "\uD83C\uDD5D",
  "\uD83C\uDD5E",
  "\uD83C\uDD5F",
  "\uD83C\uDD60",
  "\uD83C\uDD61",
  "\uD83C\uDD62",
  "\uD83C\uDD63",
  "\uD83C\uDD64",
  "\uD83C\uDD65",
  "\uD83C\uDD66",
  "\uD83C\uDD67",
  "\uD83C\uDD68",
  "\uD83C\uDD69",
  "\u24FF","\u2776",
  "\u2777","\u2778",
  "\u2779","\u277A",
  "\u277B","\u277C",
  "\u277D","\u277E" ],[
  "\uD83C\uDD30",
  "\uD83C\uDD31",
  "\uD83C\uDD32",
  "\uD83C\uDD33",
  "\uD83C\uDD34",
  "\uD83C\uDD35",
  "\uD83C\uDD36",
  "\uD83C\uDD37",
  "\uD83C\uDD38",
  "\uD83C\uDD39",
  "\uD83C\uDD3A",
  "\uD83C\uDD3B",
  "\uD83C\uDD3C",
  "\uD83C\uDD3D",
  "\uD83C\uDD3E",
  "\uD83C\uDD3F",
  "\uD83C\uDD40",
  "\uD83C\uDD41",
  "\uD83C\uDD42",
  "\uD83C\uDD43",
  "\uD83C\uDD44",
  "\uD83C\uDD45",
  "\uD83C\uDD46",
  "\uD83C\uDD47",
  "\uD83C\uDD48",
  "\uD83C\uDD49",
  "\uD83C\uDD30",
  "\uD83C\uDD31",
  "\uD83C\uDD32",
  "\uD83C\uDD33",
  "\uD83C\uDD34",
  "\uD83C\uDD35",
  "\uD83C\uDD36",
  "\uD83C\uDD37",
  "\uD83C\uDD38",
  "\uD83C\uDD39",
  "\uD83C\uDD3A",
  "\uD83C\uDD3B",
  "\uD83C\uDD3C",
  "\uD83C\uDD3D",
  "\uD83C\uDD3E",
  "\uD83C\uDD3F",
  "\uD83C\uDD40",
  "\uD83C\uDD41",
  "\uD83C\uDD42",
  "\uD83C\uDD43",
  "\uD83C\uDD44",
  "\uD83C\uDD45",
  "\uD83C\uDD46",
  "\uD83C\uDD47",
  "\uD83C\uDD48",
  "\uD83C\uDD49" ],[
  "\uD83C\uDD70",
  "\uD83C\uDD71",
  "\uD83C\uDD72",
  "\uD83C\uDD73",
  "\uD83C\uDD74",
  "\uD83C\uDD75",
  "\uD83C\uDD76",
  "\uD83C\uDD77",
  "\uD83C\uDD78",
  "\uD83C\uDD79",
  "\uD83C\uDD7A",
  "\uD83C\uDD7B",
  "\uD83C\uDD7C",
  "\uD83C\uDD7D",
  "\uD83C\uDD7E",
  "\uD83C\uDD7F",
  "\uD83C\uDD80",
  "\uD83C\uDD81",
  "\uD83C\uDD82",
  "\uD83C\uDD83",
  "\uD83C\uDD84",
  "\uD83C\uDD85",
  "\uD83C\uDD86",
  "\uD83C\uDD87",
  "\uD83C\uDD88",
  "\uD83C\uDD89",
  "\uD83C\uDD70",
  "\uD83C\uDD71",
  "\uD83C\uDD72",
  "\uD83C\uDD73",
  "\uD83C\uDD74",
  "\uD83C\uDD75",
  "\uD83C\uDD76",
  "\uD83C\uDD77",
  "\uD83C\uDD78",
  "\uD83C\uDD79",
  "\uD83C\uDD7A",
  "\uD83C\uDD7B",
  "\uD83C\uDD7C",
  "\uD83C\uDD7D",
  "\uD83C\uDD7E",
  "\uD83C\uDD7F",
  "\uD83C\uDD80",
  "\uD83C\uDD81",
  "\uD83C\uDD82",
  "\uD83C\uDD83",
  "\uD83C\uDD84",
  "\uD83C\uDD85",
  "\uD83C\uDD86",
  "\uD83C\uDD87",
  "\uD83C\uDD88",
  "\uD83C\uDD89" ],[
  "\u1D00","\u0299",
  "\u1D04","\u1D05",
  "\u1D07","\u0493",
  "\u0262","\u029C",
  "\u026A","\u1D0A",
  "\u1D0B","\u029F",
  "\u1D0D","\u0274",
  "\u1D0F","\u1D18",
  "\u03D9","\u0280",
  "\u0073","\u1D1B",
  "\u1D1C","\u1D20",
  "\u1D21","\u0078",
  "\u028F","\u1D22",
  "\u1D00","\u0299",
  "\u1D04","\u1D05",
  "\u1D07","\u0493",
  "\u0262","\u029C",
  "\u026A","\u1D0A",
  "\u1D0B","\u029F",
  "\u1D0D","\u0274",
  "\u1D0F","\u1D18",
  "\u03D9","\u0280",
  "\u0073","\u1D1B",
  "\u1D1C","\u1D20",
  "\u1D21","\u0078",
  "\u028F","\u1D22" ],[
  "\u1D43","\u1D47",
  "\u1D9C","\u1D48",
  "\u1D49","\u1DA0",
  "\u1D4D","\u02B0",
  "\u2071","\u02B2",
  "\u1D4F","\u02E1",
  "\u1D50","\u207F",
  "\u1D52","\u1D56",
  "\u1D60","\u02B3",
  "\u02E2","\u1D57",
  "\u1D58","\u1D5B",
  "\u02B7","\u02E3",
  "\u02B8","\u1DBB",
  "\u1D43","\u1D47",
  "\u1D9C","\u1D48",
  "\u1D49","\u1DA0",
  "\u1D4D","\u02B0",
  "\u2071","\u02B2",
  "\u1D4F","\u02E1",
  "\u1D50","\u207F",
  "\u1D52","\u1D56",
  "\u1D60","\u02B3",
  "\u02E2","\u1D57",
  "\u1D58","\u1D5B",
  "\u02B7","\u02E3",
  "\u02B8","\u1DBB" ],[
  "\u1D00","\u0299",
  "\u1D04","\u1D05",
  "\u1D07","\u0493",
  "\u0262","\u029C",
  "\u026A","\u1D0A",
  "\u1D0B","\u029F",
  "\u1D0D","\u0274",
  "\u1D0F","\u1D18",
  "\u03D9","\u0280",
  "\u0073","\u1D1B",
  "\u1D1C","\u1D20",
  "\u1D21","\u0078",
  "\u028F","\u1D22",
  "\u1D43","\u1D47",
  "\u1D9C","\u1D48",
  "\u1D49","\u1DA0",
  "\u1D4D","\u02B0",
  "\u2071","\u02B2",
  "\u1D4F","\u02E1",
  "\u1D50","\u207F",
  "\u1D52","\u1D56",
  "\u1D60","\u02B3",
  "\u02E2","\u1D57",
  "\u1D58","\u1D5B",
  "\u02B7","\u02E3",
  "\u02B8","\u1DBB"],[
  "\u0041","\u0042",
  "\u0043","\u0044",
  "\u0045","\u0046",
  "\u0047","\u0048",
  "\u0049","\u004A",
  "\u004B","\u004C",
  "\u004D","\u004E",
  "\u004F","\u0050",
  "\u0051","\u0052",
  "\u0053","\u0054",
  "\u0055","\u0056",
  "\u0057","\u0058",
  "\u0059","\u005A",
  "\u1D00","\u0299",
  "\u1D04","\u1D05",
  "\u1D07","\u0493",
  "\u0262","\u029C",
  "\u026A","\u1D0A",
  "\u1D0B","\u029F",
  "\u1D0D","\u0274",
  "\u1D0F","\u1D18",
  "\u03D9","\u0280",
  "\u0073","\u1D1B",
  "\u1D1C","\u1D20",
  "\u1D21","\u0078",
  "\u028F","\u1D22"],(function(...arr){
const ar = [...arr];let b = [];
for(let a=ar.length-1;a>=0;a--){
b.push(ar[a]);}return b;
}("\u007A","\u028E",
  "\u0078","\u028D",
  "\u028C","\u006E",
  "\u0287","\u0073",
  "\u0279","\u0062",
  "\u0064","\u006F",
  "\u0075","\u026F",
  "\u006C","\u029E",
  "\u027E","\u1D09",
  "\u0265","\u0183",
  "\u025F","\u01DD",
  "\u0070","\u0254",
  "\u0071","\u0250",
  "\u005A","\u028E",
  "\u0058","\u004D",
  "\u039B","\u144E",
  "\u22A5","\u0053",
  "\uA79E","\u038C",
  "\u0500","\u004F",
  "\u004E","\uA7FD",
  "\uA780","\uA7B0",
  "\u017F","\u0049",
  "\u0048","\u2141",
  "\u2132","\u018E",
  "\u15ED","\u03FD",
  "\u15FA","\u2200")),[
  "\uFF21","\uFF22",
  "\uFF23","\uFF24",
  "\uFF25","\uFF26",
  "\uFF27","\uFF28",
  "\uFF29","\uFF2A",
  "\uFF2B","\uFF2C",
  "\uFF2D","\uFF2E",
  "\uFF2F","\uFF30",
  "\uFF31","\uFF32",
  "\uFF33","\uFF34",
  "\uFF35","\uFF36",
  "\uFF37","\uFF38",
  "\uFF39","\uFF3A",
  "\uFF41","\uFF42",
  "\uFF43","\uFF44",
  "\uFF45","\uFF46",
  "\uFF47","\uFF48",
  "\uFF49","\uFF4A",
  "\uFF4B","\uFF4C",
  "\uFF4D","\uFF4E",
  "\uFF4F","\uFF50",
  "\uFF51","\uFF52",
  "\uFF53","\uFF54",
  "\uFF55","\uFF56",
  "\uFF57","\uFF58",
  "\uFF59","\uFF5A"],[
  "\u03B1","\u0253",
  "\u0063","\u2202",
  "\u03B5","\u0192",
  "\u0260","\u0266",
  "\u0E40","\u029D",
  "\u04A1","\u2113",
  "\u0271","\u0273",
  "\u03C3","\u03C1",
  "\u03C6","\u027E",
  "\u0E23","\u01AD",
  "\u00B5","\u0475",
  "\u03C9","\u05D0",
  "\u10E7","\u01B6",
  "\u03B1","\u0253",
  "\u0063","\u2202",
  "\u03B5","\u0192",
  "\u0260","\u0266",
  "\u0E40","\u029D",
  "\u04A1","\u2113",
  "\u0271","\u0273",
  "\u03C3","\u03C1",
  "\u03C6","\u027E",
  "\u0E23","\u01AD",
  "\u00B5","\u0475",
  "\u03C9","\u05D0",
  "\u10E7","\u01B6"],[
  "\u03B1","\u0573",
  "\u0063","\u056A",
  "\u04BD","\u0562",
  "\u0581","\u0570",
  "\u00ED","\u0575",
  "\u006B","\u006C",
  "\u0E15","\u0572",
  "\u0585","\u0569",
  "\u0566","\u027E",
  "\u0073","\u0535",
  "\u0574","\u0475",
  "\u0561","\u0078",
  "\u057E","\u007A",
  "\u03B1","\u0573",
  "\u0063","\u056A",
  "\u04BD","\u0562",
  "\u0581","\u0570",
  "\u00ED","\u0575",
  "\u006B","\u006C",
  "\u0E15","\u0572",
  "\u0585","\u0569",
  "\u0566","\u027E",
  "\u0073","\u0535",
  "\u0574","\u0475",
  "\u0561","\u0078",
  "\u057E","\u007A"],[
  "\u03B1","\u03D0",
  "\u03F2","\u2202",
  "\u0454","\u0192",
  "\u0067","\u043D",
  "\u03B9","\u05E0",
  "\u03BA","\u2113",
  "\u043C","\u0438",
  "\u03BF","\u03C1",
  "\u0563","\u044F",
  "\u0455","\u03C4",
  "\u03C5","\u03BD",
  "\u03C9","\u03F0",
  "\u03B3","\u007A",
  "\u03B1","\u03D0",
  "\u03F2","\u2202",
  "\u0454","\u0192",
  "\u0067","\u043D",
  "\u03B9","\u05E0",
  "\u03BA","\u2113",
  "\u043C","\u0438",
  "\u03BF","\u03C1",
  "\u0563","\u044F",
  "\u0455","\u03C4",
  "\u03C5","\u03BD",
  "\u03C9","\u03F0",
  "\u03B3","\u007A"],[
  "\u0539","\u0545",
  "\u0547","\u053A",
  "\u0065","\u0532",
  "\u0533","\u0267",
  "\u027F","\u029D",
  "\u006B","\u0285",
  "\u028D","\u054C",
  "\u053E","\u03C1",
  "\u03C6","\u0550",
  "\u054F","\u0535",
  "\u0544","\u05E2",
  "\u0561","\u0543",
  "\u054E","\u0540",
  "\u0539","\u0545",
  "\u0547","\u053A",
  "\u0065","\u0532",
  "\u0533","\u0267",
  "\u027F","\u029D",
  "\u006B","\u0285",
  "\u028D","\u054C",
  "\u053E","\u03C1",
  "\u03C6","\u0550",
  "\u054F","\u0535",
  "\u0544","\u05E2",
  "\u0561","\u0543",
  "\u054E","\u0540"],[
  "\u5342","\u4E43",
  "\u531A","\u2145",
  "\u4E47","\u5343",
  "\u13B6","\u5344",
  "\u4E28","\u4E3F",
  "\u04A0","\u3125",
  "\u722A","\u51E0",
  "\u3116","\u5369",
  "\u024A","\u5C3A",
  "\u4E02","\u3112",
  "\u51F5","\u142F",
  "\u5C71","\u4E42",
  "\u311A","\u4E59",
  "\u5342","\u4E43",
  "\u531A","\u2145",
  "\u4E47","\u5343",
  "\u13B6","\u5344",
  "\u4E28","\u4E3F",
  "\u04A0","\u3125",
  "\u722A","\u51E0",
  "\u3116","\u5369",
  "\u024A","\u5C3A",
  "\u4E02","\u3112",
  "\u51F5","\u142F",
  "\u5C71","\u4E42",
  "\u311A","\u4E59"],[
  "\u20B3","\u0243",
  "\u20AC","\u0189",
  "\u0246","\u20A3",
  "\u20B2","\u0126",
  "\u0197","\u0248",
  "\u051E","\u2C60",
  "\u2C98","\u20A6",
  "\u00D8","\u20B1",
  "\u0051\u0336",
  "\u024C","\u0024",
  "\u20AE","\u0244",
  "\u2A54","\u20A9",
  "\u04FE","\u00A5",
  "\u01B5","\u20B3",
  "\u0243","\u20AC",
  "\u0189","\u0246",
  "\u20A3","\u20B2",
  "\u0126","\u0197",
  "\u0248","\u051E",
  "\u2C60","\u2C98",
  "\u20A6","\u00D8",
  "\u20B1","\u0051\u0336",
  "\u024C","\u0024",
  "\u20AE","\u0244",
  "\u2A54","\u20A9",
  "\u04FE","\u00A5",
  "\u01B5"],[
  "\u0E04","\u0E52",
  "\u03C2","\u0E54",
  "\u0454","\u0166",
  "\uFEEE","\u0452",
  "\u0E40","\u05DF",
  "\u043A","\u006C",
  "\u0E53","\u0E20",
  "\u0E4F","\u05E7",
  "\u1EE3","\u0433",
  "\u0E23","\u0074",
  "\u0E22","\u05E9",
  "\u0E2C","\u05E5",
  "\u05D0","\u007A",
  "\u0E04","\u0E52",
  "\u03C2","\u0E54",
  "\u0454","\u0166",
  "\uFEEE","\u0452",
  "\u0E40","\u05DF",
  "\u043A","\u006C",
  "\u0E53","\u0E20",
  "\u0E4F","\u05E7",
  "\u1EE3","\u0433",
  "\u0E23","\u0074",
  "\u0E22","\u05E9",
  "\u0E2C","\u05E5",
  "\u05D0","\u007A"],[
  "\uA34F","\uA303",
  "\uA253","\uA038",
  "\uA35F","\uA387",
  "\uA045","\uA0C5",
  "\uA024","\uA02D",
  "\uA018","\uA492",
  "\uA3AD","\uA224",
  "\uA0A6","\u1598",
  "\uA1B0","\uA2EA",
  "\uA317","\uA4C4",
  "\uA00E","\u142F",
  "\uA14F","\uA2BC",
  "\uA329","\uA074",
  "\uA34F","\uA303",
  "\uA253","\uA038",
  "\uA35F","\uA387",
  "\uA045","\uA0C5",
  "\uA024","\uA02D",
  "\uA018","\uA492",
  "\uA3AD","\uA224",
  "\uA0A6","\u1598",
  "\uA1B0","\uA2EA",
  "\uA317","\uA4C4",
  "\uA00E","\u142F",
  "\uA14F","\uA2BC",
  "\uA329","\uA074"],[
  "\u15E9","\u15F7",
  "\u1455","\u15DE",
  "\u15F4","\u15B4",
  "\u13C0","\u157C",
  "\u13C6","\u148D",
  "\u13E6","\u3057",
  "\u15F0","\u144E",
  "\u176A","\u146D",
  "\u146B","\u1587",
  "\u1511","\u13A2",
  "\u144C","\u142F",
  "\u15EF","\u166D",
  "\u13A9","\u13C3",
  "\u15E9","\u15F7",
  "\u1455","\u15DE",
  "\u15F4","\u15B4",
  "\u13C0","\u157C",
  "\u13C6","\u148D",
  "\u13E6","\u3057",
  "\u15F0","\u144E",
  "\u176A","\u146D",
  "\u146B","\u1587",
  "\u1511","\u13A2",
  "\u144C","\u142F",
  "\u15EF","\u166D",
  "\u13A9","\u13C3"],[
  "\u13AA","\u13F4",
  "\u13DF","\u13A0",
  "\u13AC","\u0492",
  "\u13C0","\u13BB",
  "\u13C6","\u13AB",
  "\u13E6","\u13DE",
  "\u13B7","\u039D",
  "\u03F4","\u13E2",
  "\u03D8","\u13A1",
  "\u054F","\u0372",
  "\u10AE","\u13D9",
  "\u13D4","\u0425",
  "\u13BD","\u13C3",
  "\u13AA","\u13F4",
  "\u13DF","\u13A0",
  "\u13AC","\u0492",
  "\u13C0","\u13BB",
  "\u13C6","\u13AB",
  "\u13E6","\u13DE",
  "\u13B7","\u039D",
  "\u03F4","\u13E2",
  "\u03D8","\u13A1",
  "\u054F","\u0372",
  "\u10AE","\u13D9",
  "\u13D4","\u0425",
  "\u13BD","\u13C3"],[
  "\u266C","\u15B2",
  "\u00A2","\u15B1",
  "\u17E9","\u2A0F",
  "\u2761","\u03E6",
  "\u0268","\u0249",
  "\u0199","\u026D",
  "\u17E3","\u2A4E",
  "\u17E0","\u15B0",
  "\u15B3","\u01A6",
  "\u1793","\u01AC",
  "\u2A4F","\u2A54",
  "\u019C","\u2717",
  "\u01B4","\u0224",
  "\u266C","\u15B2",
  "\u00A2","\u15B1",
  "\u17E9","\u2A0F",
  "\u2761","\u03E6",
  "\u0268","\u0249",
  "\u0199","\u026D",
  "\u17E3","\u2A4E",
  "\u17E0","\u15B0",
  "\u15B3","\u01A6",
  "\u1793","\u01AC",
  "\u2A4F","\u2A54",
  "\u019C","\u2717",
  "\u01B4","\u0224"],
  u('','\u0488\u00A0'),
  u('','\u0489\u00A0'),
  u('','\u0353\u033D'),
  u('\u005B\u0332\u0305','\u0332\u0305\u005D'),
  u('','\u0337'),
  u('','\u0338'),
  u('','\u0324'),
  u('','\u0308'),
  u('','\u0333'),
  u('','\u0330'),
  u('\u0334','\u0334'),
  u('','\u0303'),
  u('','\u0346'),
  u('','\u0325'),
  u('\u0336','\u0336'),
  u('','\u0353'),
  u('','\u033D'),
  u('','\u0359'),
  u('','\u035B'),
  u('','\u0310'),
  u('','\u0352'),
  u('','\u033E'),
  u('','\u030F'),
  u('','\u030E'),
  u('','\u030B'),
  u('','\u032B'),
  u('','\u035A'),
  u('','\u034D'),
  u('','\u0344'),
  u('','\u034A'),
  u('','\u031D'),
  u('','\u033B'),
  u('\u200B\u0020\u0020\u0020\u0020','\u20E2\u0020\u0020\u0020\u0020\u200B'),
  u('','\uA672\u00A0\u00A0\u00A0\u00A0'),
  u('','\u20DE\u00A0\u00A0\u00A0\u00A0'),
  u('','\u20DF\u00A0\u00A0\u00A0\u00A0'),
  u('','\u20DD\u00A0\u00A0\u00A0\u00A0'),
  u('','\u20E4\u00A0'),
  u('','\u20E0\u00A0'),
  u('','\u20EB\u00A0\u00A0'),[
  "\uD835\uDD38",
  "\uD835\uDD39",
  "\u2102",
  "\uD835\uDD3B",
  "\uD835\uDD3C",
  "\uD835\uDD3D",
  "\uD835\uDD3E",
  "\u210D",
  "\uD835\uDD40",
  "\uD835\uDD41",
  "\uD835\uDD42",
  "\uD835\uDD43",
  "\uD835\uDD44",
  "\u2115",
  "\uD835\uDD46",
  "\u2119",
  "\u211A",
  "\u211D",
  "\uD835\uDD4A",
  "\uD835\uDD4B",
  "\uD835\uDD4C",
  "\uD835\uDD4D",
  "\uD835\uDD4E",
  "\uD835\uDD4F",
  "\uD835\uDD50",
  "\u2124",
  "\uD835\uDD52",
  "\uD835\uDD53",
  "\uD835\uDD54",
  "\uD835\uDD55",
  "\uD835\uDD56",
  "\uD835\uDD57",
  "\uD835\uDD58",
  "\uD835\uDD59",
  "\uD835\uDD5A",
  "\uD835\uDD5B",
  "\uD835\uDD5C",
  "\uD835\uDD5D",
  "\uD835\uDD5E",
  "\uD835\uDD5F",
  "\uD835\uDD60",
  "\uD835\uDD61",
  "\uD835\uDD62",
  "\uD835\uDD63",
  "\uD835\uDD64",
  "\uD835\uDD65",
  "\uD835\uDD66",
  "\uD835\uDD67",
  "\uD835\uDD68",
  "\uD835\uDD69",
  "\uD835\uDD6A",
  "\uD835\uDD6B",
  "\uD835\uDFD8",
  "\uD835\uDFD9",
  "\uD835\uDFDA",
  "\uD835\uDFDB",
  "\uD835\uDFDC",
  "\uD835\uDFDD",
  "\uD835\uDFDE",
  "\uD835\uDFDF",
  "\uD835\uDFE0",
  "\uD835\uDFE1"],[
  "\uD835\uDC9C",
  "\u212C",
  "\uD835\uDC9E",
  "\uD835\uDC9F",
  "\u2130",
  "\u2131",
  "\uD835\uDCA2",
  "\u210B",
  "\u2110",
  "\uD835\uDCA5",
  "\uD835\uDCA6",
  "\u2112",
  "\u2133",
  "\uD835\uDCA9",
  "\uD835\uDCAA",
  "\uD835\uDCAB",
  "\uD835\uDCAC",
  "\u211B",
  "\uD835\uDCAE",
  "\uD835\uDCAF",
  "\uD835\uDCB0",
  "\uD835\uDCB1",
  "\uD835\uDCB2",
  "\uD835\uDCB3",
  "\uD835\uDCB4",
  "\uD835\uDCB5",
  "\uD835\uDCB6",
  "\uD835\uDCB7",
  "\uD835\uDCB8",
  "\uD835\uDCB9",
  "\u212F",
  "\uD835\uDCBB",
  "\u210A",
  "\uD835\uDCBD",
  "\uD835\uDCBE",
  "\uD835\uDCBF",
  "\uD835\uDCC0",
  "\uD835\uDCC1",
  "\uD835\uDCC2",
  "\uD835\uDCC3",
  "\u2134",
  "\uD835\uDCC5",
  "\uD835\uDCC6",
  "\uD835\uDCC7",
  "\uD835\uDCC8",
  "\uD835\uDCC9",
  "\uD835\uDCCA",
  "\uD835\uDCCB",
  "\uD835\uDCCC",
  "\uD835\uDCCD",
  "\uD835\uDCCE",
  "\uD835\uDCCF"],[
  "\uD835\uDCD0",
  "\uD835\uDCD1",
  "\uD835\uDCD2",
  "\uD835\uDCD3",
  "\uD835\uDCD4",
  "\uD835\uDCD5",
  "\uD835\uDCD6",
  "\uD835\uDCD7",
  "\uD835\uDCD8",
  "\uD835\uDCD9",
  "\uD835\uDCDA",
  "\uD835\uDCDB",
  "\uD835\uDCDC",
  "\uD835\uDCDD",
  "\uD835\uDCDE",
  "\uD835\uDCDF",
  "\uD835\uDCE0",
  "\uD835\uDCE1",
  "\uD835\uDCE2",
  "\uD835\uDCE3",
  "\uD835\uDCE4",
  "\uD835\uDCE5",
  "\uD835\uDCE6",
  "\uD835\uDCE7",
  "\uD835\uDCE8",
  "\uD835\uDCE9",
  "\uD835\uDCEA",
  "\uD835\uDCEB",
  "\uD835\uDCEC",
  "\uD835\uDCED",
  "\uD835\uDCEE",
  "\uD835\uDCEF",
  "\uD835\uDCF0",
  "\uD835\uDCF1",
  "\uD835\uDCF2",
  "\uD835\uDCF3",
  "\uD835\uDCF4",
  "\uD835\uDCF5",
  "\uD835\uDCF6",
  "\uD835\uDCF7",
  "\uD835\uDCF8",
  "\uD835\uDCF9",
  "\uD835\uDCFA",
  "\uD835\uDCFB",
  "\uD835\uDCFC",
  "\uD835\uDCFD",
  "\uD835\uDCFE",
  "\uD835\uDCFF",
  "\uD835\uDD00",
  "\uD835\uDD01",
  "\uD835\uDD02",
  "\uD835\uDD03"],[
  "\uD835\uDD04",
  "\uD835\uDD05",
  "\u212D",
  "\uD835\uDD07",
  "\uD835\uDD08",
  "\uD835\uDD09",
  "\uD835\uDD0A",
  "\u210C",
  "\u2111",
  "\uD835\uDD0D",
  "\uD835\uDD0E",
  "\uD835\uDD0F",
  "\uD835\uDD10",
  "\uD835\uDD11",
  "\uD835\uDD12",
  "\uD835\uDD13",
  "\uD835\uDD14",
  "\u211C",
  "\uD835\uDD16",
  "\uD835\uDD17",
  "\uD835\uDD18",
  "\uD835\uDD19",
  "\uD835\uDD1A",
  "\uD835\uDD1B",
  "\uD835\uDD1C",
  "\u2128",
  "\uD835\uDD1E",
  "\uD835\uDD1F",
  "\uD835\uDD20",
  "\uD835\uDD21",
  "\uD835\uDD22",
  "\uD835\uDD23",
  "\uD835\uDD24",
  "\uD835\uDD25",
  "\uD835\uDD26",
  "\uD835\uDD27",
  "\uD835\uDD28",
  "\uD835\uDD29",
  "\uD835\uDD2A",
  "\uD835\uDD2B",
  "\uD835\uDD2C",
  "\uD835\uDD2D",
  "\uD835\uDD2E",
  "\uD835\uDD2F",
  "\uD835\uDD30",
  "\uD835\uDD31",
  "\uD835\uDD32",
  "\uD835\uDD33",
  "\uD835\uDD34",
  "\uD835\uDD35",
  "\uD835\uDD36",
  "\uD835\uDD37"],[
  "\uD835\uDD6C",
  "\uD835\uDD6D",
  "\uD835\uDD6E",
  "\uD835\uDD6F",
  "\uD835\uDD70",
  "\uD835\uDD71",
  "\uD835\uDD72",
  "\uD835\uDD73",
  "\uD835\uDD74",
  "\uD835\uDD75",
  "\uD835\uDD76",
  "\uD835\uDD77",
  "\uD835\uDD78",
  "\uD835\uDD79",
  "\uD835\uDD7A",
  "\uD835\uDD7B",
  "\uD835\uDD7C",
  "\uD835\uDD7D",
  "\uD835\uDD7E",
  "\uD835\uDD7F",
  "\uD835\uDD80",
  "\uD835\uDD81",
  "\uD835\uDD82",
  "\uD835\uDD83",
  "\uD835\uDD84",
  "\uD835\uDD85",
  "\uD835\uDD86",
  "\uD835\uDD87",
  "\uD835\uDD88",
  "\uD835\uDD89",
  "\uD835\uDD8A",
  "\uD835\uDD8B",
  "\uD835\uDD8C",
  "\uD835\uDD8D",
  "\uD835\uDD8E",
  "\uD835\uDD8F",
  "\uD835\uDD90",
  "\uD835\uDD91",
  "\uD835\uDD92",
  "\uD835\uDD93",
  "\uD835\uDD94",
  "\uD835\uDD95",
  "\uD835\uDD96",
  "\uD835\uDD97",
  "\uD835\uDD98",
  "\uD835\uDD99",
  "\uD835\uDD9A",
  "\uD835\uDD9B",
  "\uD835\uDD9C",
  "\uD835\uDD9D",
  "\uD835\uDD9E",
  "\uD835\uDD9F"],[
  "\uD835\uDDA0",
  "\uD835\uDDA1",
  "\uD835\uDDA2",
  "\uD835\uDDA3",
  "\uD835\uDDA4",
  "\uD835\uDDA5",
  "\uD835\uDDA6",
  "\uD835\uDDA7",
  "\uD835\uDDA8",
  "\uD835\uDDA9",
  "\uD835\uDDAA",
  "\uD835\uDDAB",
  "\uD835\uDDAC",
  "\uD835\uDDAD",
  "\uD835\uDDAE",
  "\uD835\uDDAF",
  "\uD835\uDDB0",
  "\uD835\uDDB1",
  "\uD835\uDDB2",
  "\uD835\uDDB3",
  "\uD835\uDDB4",
  "\uD835\uDDB5",
  "\uD835\uDDB6",
  "\uD835\uDDB7",
  "\uD835\uDDB8",
  "\uD835\uDDB9",
  "\uD835\uDDBA",
  "\uD835\uDDBB",
  "\uD835\uDDBC",
  "\uD835\uDDBD",
  "\uD835\uDDBE",
  "\uD835\uDDBF",
  "\uD835\uDDC0",
  "\uD835\uDDC1",
  "\uD835\uDDC2",
  "\uD835\uDDC3",
  "\uD835\uDDC4",
  "\uD835\uDDC5",
  "\uD835\uDDC6",
  "\uD835\uDDC7",
  "\uD835\uDDC8",
  "\uD835\uDDC9",
  "\uD835\uDDCA",
  "\uD835\uDDCB",
  "\uD835\uDDCC",
  "\uD835\uDDCD",
  "\uD835\uDDCE",
  "\uD835\uDDCF",
  "\uD835\uDDD0",
  "\uD835\uDDD1",
  "\uD835\uDDD2",
  "\uD835\uDDD3",
  "\uD835\uDFE2",
  "\uD835\uDFE3",
  "\uD835\uDFE4",
  "\uD835\uDFE5",
  "\uD835\uDFE6",
  "\uD835\uDFE7",
  "\uD835\uDFE8",
  "\uD835\uDFE9",
  "\uD835\uDFEA",
  "\uD835\uDFEB"],[
  "\uD835\uDDD4",
  "\uD835\uDDD5",
  "\uD835\uDDD6",
  "\uD835\uDDD7",
  "\uD835\uDDD8",
  "\uD835\uDDD9",
  "\uD835\uDDDA",
  "\uD835\uDDDB",
  "\uD835\uDDDC",
  "\uD835\uDDDD",
  "\uD835\uDDDE",
  "\uD835\uDDDF",
  "\uD835\uDDE0",
  "\uD835\uDDE1",
  "\uD835\uDDE2",
  "\uD835\uDDE3",
  "\uD835\uDDE4",
  "\uD835\uDDE5",
  "\uD835\uDDE6",
  "\uD835\uDDE7",
  "\uD835\uDDE8",
  "\uD835\uDDE9",
  "\uD835\uDDEA",
  "\uD835\uDDEB",
  "\uD835\uDDEC",
  "\uD835\uDDED",
  "\uD835\uDDEE",
  "\uD835\uDDEF",
  "\uD835\uDDF0",
  "\uD835\uDDF1",
  "\uD835\uDDF2",
  "\uD835\uDDF3",
  "\uD835\uDDF4",
  "\uD835\uDDF5",
  "\uD835\uDDF6",
  "\uD835\uDDF7",
  "\uD835\uDDF8",
  "\uD835\uDDF9",
  "\uD835\uDDFA",
  "\uD835\uDDFB",
  "\uD835\uDDFC",
  "\uD835\uDDFD",
  "\uD835\uDDFE",
  "\uD835\uDDFF",
  "\uD835\uDE00",
  "\uD835\uDE01",
  "\uD835\uDE02",
  "\uD835\uDE03",
  "\uD835\uDE04",
  "\uD835\uDE05",
  "\uD835\uDE06",
  "\uD835\uDE07",
  "\uD835\uDFCE",
  "\uD835\uDFCF",
  "\uD835\uDFD0",
  "\uD835\uDFD1",
  "\uD835\uDFD2",
  "\uD835\uDFD3",
  "\uD835\uDFD4",
  "\uD835\uDFD5",
  "\uD835\uDFD6",
  "\uD835\uDFD7"],[
  "\uD835\uDE08",
  "\uD835\uDE09",
  "\uD835\uDE0A",
  "\uD835\uDE0B",
  "\uD835\uDE0C",
  "\uD835\uDE0D",
  "\uD835\uDE0E",
  "\uD835\uDE0F",
  "\uD835\uDE10",
  "\uD835\uDE11",
  "\uD835\uDE12",
  "\uD835\uDE13",
  "\uD835\uDE14",
  "\uD835\uDE15",
  "\uD835\uDE16",
  "\uD835\uDE17",
  "\uD835\uDE18",
  "\uD835\uDE19",
  "\uD835\uDE1A",
  "\uD835\uDE1B",
  "\uD835\uDE1C",
  "\uD835\uDE1D",
  "\uD835\uDE1E",
  "\uD835\uDE1F",
  "\uD835\uDE20",
  "\uD835\uDE21",
  "\uD835\uDE22",
  "\uD835\uDE23",
  "\uD835\uDE24",
  "\uD835\uDE25",
  "\uD835\uDE26",
  "\uD835\uDE27",
  "\uD835\uDE28",
  "\uD835\uDE29",
  "\uD835\uDE2A",
  "\uD835\uDE2B",
  "\uD835\uDE2C",
  "\uD835\uDE2D",
  "\uD835\uDE2E",
  "\uD835\uDE2F",
  "\uD835\uDE30",
  "\uD835\uDE31",
  "\uD835\uDE32",
  "\uD835\uDE33",
  "\uD835\uDE34",
  "\uD835\uDE35",
  "\uD835\uDE36",
  "\uD835\uDE37",
  "\uD835\uDE38",
  "\uD835\uDE39",
  "\uD835\uDE3A",
  "\uD835\uDE3B"],[
  "\uD835\uDE3C",
  "\uD835\uDE3D",
  "\uD835\uDE3E",
  "\uD835\uDE3F",
  "\uD835\uDE40",
  "\uD835\uDE41",
  "\uD835\uDE42",
  "\uD835\uDE43",
  "\uD835\uDE44",
  "\uD835\uDE45",
  "\uD835\uDE46",
  "\uD835\uDE47",
  "\uD835\uDE48",
  "\uD835\uDE49",
  "\uD835\uDE4A",
  "\uD835\uDE4B",
  "\uD835\uDE4C",
  "\uD835\uDE4D",
  "\uD835\uDE4E",
  "\uD835\uDE4F",
  "\uD835\uDE50",
  "\uD835\uDE51",
  "\uD835\uDE52",
  "\uD835\uDE53",
  "\uD835\uDE54",
  "\uD835\uDE55",
  "\uD835\uDE56",
  "\uD835\uDE57",
  "\uD835\uDE58",
  "\uD835\uDE59",
  "\uD835\uDE5A",
  "\uD835\uDE5B",
  "\uD835\uDE5C",
  "\uD835\uDE5D",
  "\uD835\uDE5E",
  "\uD835\uDE5F",
  "\uD835\uDE60",
  "\uD835\uDE61",
  "\uD835\uDE62",
  "\uD835\uDE63",
  "\uD835\uDE64",
  "\uD835\uDE65",
  "\uD835\uDE66",
  "\uD835\uDE67",
  "\uD835\uDE68",
  "\uD835\uDE69",
  "\uD835\uDE6A",
  "\uD835\uDE6B",
  "\uD835\uDE6C",
  "\uD835\uDE6D",
  "\uD835\uDE6E",
  "\uD835\uDE6F"],[
  "\uD835\uDE70",
  "\uD835\uDE71",
  "\uD835\uDE72",
  "\uD835\uDE73",
  "\uD835\uDE74",
  "\uD835\uDE75",
  "\uD835\uDE76",
  "\uD835\uDE77",
  "\uD835\uDE78",
  "\uD835\uDE79",
  "\uD835\uDE7A",
  "\uD835\uDE7B",
  "\uD835\uDE7C",
  "\uD835\uDE7D",
  "\uD835\uDE7E",
  "\uD835\uDE7F",
  "\uD835\uDE80",
  "\uD835\uDE81",
  "\uD835\uDE82",
  "\uD835\uDE83",
  "\uD835\uDE84",
  "\uD835\uDE85",
  "\uD835\uDE86",
  "\uD835\uDE87",
  "\uD835\uDE88",
  "\uD835\uDE89",
  "\uD835\uDE8A",
  "\uD835\uDE8B",
  "\uD835\uDE8C",
  "\uD835\uDE8D",
  "\uD835\uDE8E",
  "\uD835\uDE8F",
  "\uD835\uDE90",
  "\uD835\uDE91",
  "\uD835\uDE92",
  "\uD835\uDE93",
  "\uD835\uDE94",
  "\uD835\uDE95",
  "\uD835\uDE96",
  "\uD835\uDE97",
  "\uD835\uDE98",
  "\uD835\uDE99",
  "\uD835\uDE9A",
  "\uD835\uDE9B",
  "\uD835\uDE9C",
  "\uD835\uDE9D",
  "\uD835\uDE9E",
  "\uD835\uDE9F",
  "\uD835\uDEA0",
  "\uD835\uDEA1",
  "\uD835\uDEA2",
  "\uD835\uDEA3",
  "\uD835\uDFF6",
  "\uD835\uDFF7",
  "\uD835\uDFF8",
  "\uD835\uDFF9",
  "\uD835\uDFFA",
  "\uD835\uDFFB",
  "\uD835\uDFFC",
  "\uD835\uDFFD",
  "\uD835\uDFFE",
  "\uD835\uDFFF"],[
  "\uD835\uDC00",
  "\uD835\uDC01",
  "\uD835\uDC02",
  "\uD835\uDC03",
  "\uD835\uDC04",
  "\uD835\uDC05",
  "\uD835\uDC06",
  "\uD835\uDC07",
  "\uD835\uDC08",
  "\uD835\uDC09",
  "\uD835\uDC0A",
  "\uD835\uDC0B",
  "\uD835\uDC0C",
  "\uD835\uDC0D",
  "\uD835\uDC0E",
  "\uD835\uDC0F",
  "\uD835\uDC10",
  "\uD835\uDC11",
  "\uD835\uDC12",
  "\uD835\uDC13",
  "\uD835\uDC14",
  "\uD835\uDC15",
  "\uD835\uDC16",
  "\uD835\uDC17",
  "\uD835\uDC18",
  "\uD835\uDC19",
  "\uD835\uDC1A",
  "\uD835\uDC1B",
  "\uD835\uDC1C",
  "\uD835\uDC1D",
  "\uD835\uDC1E",
  "\uD835\uDC1F",
  "\uD835\uDC20",
  "\uD835\uDC21",
  "\uD835\uDC22",
  "\uD835\uDC23",
  "\uD835\uDC24",
  "\uD835\uDC25",
  "\uD835\uDC26",
  "\uD835\uDC27",
  "\uD835\uDC28",
  "\uD835\uDC29",
  "\uD835\uDC2A",
  "\uD835\uDC2B",
  "\uD835\uDC2C",
  "\uD835\uDC2D",
  "\uD835\uDC2E",
  "\uD835\uDC2F",
  "\uD835\uDC30",
  "\uD835\uDC31",
  "\uD835\uDC32",
  "\uD835\uDC33",
  "\uD835\uDFCE",
  "\uD835\uDFCF",
  "\uD835\uDFD0",
  "\uD835\uDFD1",
  "\uD835\uDFD2",
  "\uD835\uDFD3",
  "\uD835\uDFD4",
  "\uD835\uDFD5",
  "\uD835\uDFD6",
  "\uD835\uDFD7"],[
  "\uD835\uDC68",
  "\uD835\uDC69",
  "\uD835\uDC6A",
  "\uD835\uDC6B",
  "\uD835\uDC6C",
  "\uD835\uDC6D",
  "\uD835\uDC6E",
  "\uD835\uDC6F",
  "\uD835\uDC70",
  "\uD835\uDC71",
  "\uD835\uDC72",
  "\uD835\uDC73",
  "\uD835\uDC74",
  "\uD835\uDC75",
  "\uD835\uDC76",
  "\uD835\uDC77",
  "\uD835\uDC78",
  "\uD835\uDC79",
  "\uD835\uDC7A",
  "\uD835\uDC7B",
  "\uD835\uDC7C",
  "\uD835\uDC7D",
  "\uD835\uDC7E",
  "\uD835\uDC7F",
  "\uD835\uDC80",
  "\uD835\uDC81",
  "\uD835\uDC82",
  "\uD835\uDC83",
  "\uD835\uDC84",
  "\uD835\uDC85",
  "\uD835\uDC86",
  "\uD835\uDC87",
  "\uD835\uDC88",
  "\uD835\uDC89",
  "\uD835\uDC8A",
  "\uD835\uDC8B",
  "\uD835\uDC8C",
  "\uD835\uDC8D",
  "\uD835\uDC8E",
  "\uD835\uDC8F",
  "\uD835\uDC90",
  "\uD835\uDC91",
  "\uD835\uDC92",
  "\uD835\uDC93",
  "\uD835\uDC94",
  "\uD835\uDC95",
  "\uD835\uDC96",
  "\uD835\uDC97",
  "\uD835\uDC98",
  "\uD835\uDC99",
  "\uD835\uDC9A",
  "\uD835\uDC9B"],[
  "\uD835\uDC34",
  "\uD835\uDC35",
  "\uD835\uDC36",
  "\uD835\uDC37",
  "\uD835\uDC38",
  "\uD835\uDC39",
  "\uD835\uDC3A",
  "\uD835\uDC3B",
  "\uD835\uDC3C",
  "\uD835\uDC3D",
  "\uD835\uDC3E",
  "\uD835\uDC3F",
  "\uD835\uDC40",
  "\uD835\uDC41",
  "\uD835\uDC42",
  "\uD835\uDC43",
  "\uD835\uDC44",
  "\uD835\uDC45",
  "\uD835\uDC46",
  "\uD835\uDC47",
  "\uD835\uDC48",
  "\uD835\uDC49",
  "\uD835\uDC4A",
  "\uD835\uDC4B",
  "\uD835\uDC4C",
  "\uD835\uDC4D",
  "\uD835\uDC4E",
  "\uD835\uDC4F",
  "\uD835\uDC50",
  "\uD835\uDC51",
  "\uD835\uDC52",
  "\uD835\uDC53",
  "\uD835\uDC54",
  "\uD835\uDC89",
  "\uD835\uDC56",
  "\uD835\uDC57",
  "\uD835\uDC58",
  "\uD835\uDC59",
  "\uD835\uDC5A",
  "\uD835\uDC5B",
  "\uD835\uDC5C",
  "\uD835\uDC5D",
  "\uD835\uDC5E",
  "\uD835\uDC5F",
  "\uD835\uDC60",
  "\uD835\uDC61",
  "\uD835\uDC62",
  "\uD835\uDC63",
  "\uD835\uDC64",
  "\uD835\uDC65",
  "\uD835\uDC66",
  "\uD835\uDC67"]
  
];





// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
// 0123456789
// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
// 112
// 
// document.write(w(""))
// alert(txts[74])
// document.write(txts[20])
//  alert(" \u200B\u0020\u0020\u0020\u0020 \u0041 \u20E2\u0020\u0020\u0020\u0020\u200B ")
/*
function w(t){
   let v="";
  for (let a of t){
        v += `"${unc(a)}",<br>`;
  }
  return v;
}
*/