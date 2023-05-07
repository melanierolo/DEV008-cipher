import { cipher } from "./cipher.js";

const buttonCipher = document.getElementById("cipher");
const buttonDecipher = document.getElementById("decipher");

//Validando que los botones existen para no generar un ERROR
if (buttonCipher || buttonDecipher) {
  buttonCipher.addEventListener("click", goToCipher);
  buttonDecipher.addEventListener("click", goToDecipher);
}

function goToCipher() {
  const inputOffset = document.getElementsByName("cipher__input")[0].value;
  const inputTextarea = document.getElementsByName("cipher__textarea")[0].value;
  //offset es un string al venir del input entonces lo convierto en un number
  const numberOffset = parseFloat(inputOffset);

  if (numberOffset < 1 || Number.isInteger(numberOffset) === false) {
    alert(
      "Por favor,ingrese el valor del offset como un número entero positivo (Ej. 4,5,etc)."
    );
  } else {
    cipher.cipherMessage(inputTextarea, numberOffset);
    console.log(cipher.cipherMessage(inputTextarea, numberOffset));
  }
}

function goToDecipher() {
  const inputOffset = document.getElementsByName("cipher__input")[0].value;
  const inputTextarea = document.getElementsByName("cipher__textarea")[0].value;
  //offset es un string al venir del input entonces lo convierto en un "number"
  const numberOffset = parseFloat(inputOffset);

  if (numberOffset < 1 || Number.isInteger(numberOffset) === false) {
    alert(
      "Por favor,ingrese el valor del offset como un número entero positivo (Ej. 4,5,etc)."
    );
  } else {
    alert("el botón decipher funciona!!");
    cipher.decipherMessage(inputTextarea, numberOffset);
    console.log(cipher.decipherMessage(inputTextarea, numberOffset));
  }
}
