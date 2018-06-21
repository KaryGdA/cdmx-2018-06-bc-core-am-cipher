// Variables.
let lugares = document.getElementById("desplazamiento"); //Clave numérica proporcionada por el usuario.
let caracteres = document.getElementById("texto"); //Texto ingresado por el usuarios.
let fraseCifrada = [];
let ubicacion = lugares.value;
let mensaje = caracteres.value;
let nuevaFrase = [];
// Función para cifrar.
let cifrar = () => {
let mensaje = caracteres.value;
let ubicacion = parseInt(lugares.value);
  for (let i = 0; i < mensaje.length; i++) {
    // Formula Cifrado César (x - 65  + n ) % 26 +651
    if (mensaje.length = 32) {
      return " ";
    }
    fraseCifrada [i]= ((mensaje.charCodeAt(i)) - 65  + ubicacion ) % 26 + 65;
    nuevaFrase [i] = String.fromCharCode(fraseCifrada [i]);
    resultadoC.innerHTML += nuevaFrase [i];
  }
console.log(fraseCifrada);
console.log(nuevaFrase);
  }

// Función para desifrar.
let fraseDescifrada = [];
let fraseFinal = [];
let descifrar = () => {
let nuevaFrase = caracteres.value;
let ubicacionFinal = parseInt(lugares.value);

for (let i = 0; i < nuevaFrase.length; i++) {
  fraseDescifrada [i]= ((nuevaFrase.charCodeAt(i)) + 65  - ubicacionFinal ) % 26 + 65;
  fraseFinal [i] = String.fromCharCode(fraseDescifrada [i]);
resultadoD.innerHTML += fraseFinal [i];
  }
console.log(fraseDescifrada);
console.log(fraseFinal);

  }


  /*fraseCifrada= (mensaje - 65  + ubicacion ) % 26 + 65;
  console.log(fraseCifrada);
  let caracteresT = String.fromCharCode(fraseCifrada);
  document.getElementById("resultado").innerHTML = caracteresT;


const descifrar (elemento) {
  let fraseR = document.getElementsByTagName("input")[0].value;
  let caracteresR = fraseR.charCodeAt(0);
  let fraseDesifrada = [(caracteresR - 65  - 7 ) % 26 + 65];
  let caracteresL = String.fromCharCode(fraseDesifrada);
  document.getElementById("resultado").innerHTML = caracteresL;
}*/


// Codigo ASCII
//{
//"31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",
//"36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",
//"41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",
//"46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",
//"51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",
//"56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",
//"61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",
//"66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",
//"71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",
//"76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",
//"81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",
//"86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",
//"91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",
//"96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",
//"101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",
//"106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",
//"111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",
//"116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",
//"121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",
//"126": "~",    "127": ""
//}
