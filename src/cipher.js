window.cipher = {
  // Función para cifrar.
  let cifrar = () => {
  let mensaje = caracteres.value;
  let ubicacion = parseInt(lugares.value);
    for (let i = 0; i < mensaje.length; i++) {
      // Formula Cifrado César (x - 65  + n ) % 26 +651
      fraseCifrada [i]= ((mensaje.charCodeAt(i)) - 65  + ubicacion ) % 26 + 65;
      nuevaFrase [i] = String.fromCharCode(fraseCifrada [i]);
      resultadoC.innerHTML += nuevaFrase [i];
    }
  console.log(fraseCifrada);
  console.log(nuevaFrase);
    }

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

};
