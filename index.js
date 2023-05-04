import cipher from "./cipher.js";
import { aritmetica } from "./functions.js";

const buttonCipher = document.getElementById("cipher");

function cipherFormula(numberUnicode, offset, number1, mod) {
  const result = ((numberUnicode + offset - number1) % mod) + number1;
  return result;
}

function cipherMessage(string, numberOffset) {
  const arrMessage = [...string];
  const numberOfElements = arrMessage.length;
  let newMessage = [];

  for (let i = 0; i < numberOfElements; i++) {
    let letter = arrMessage[i];
    console.log("letter ", letter, typeof letter);
    console.log(
      "letter.codePointAt: ",
      letter.codePointAt(0),
      typeof letter.codePointAt(0)
    );
    if (31 < letter.codePointAt(0) && letter.codePointAt(0) < 65) {
      console.log("Beginning: ", letter, letter.codePointAt(0));
      console.log(cipherFormula(letter.codePointAt(0), numberOffset, 32, 33));
      console.log(
        "Final",
        String.fromCodePoint(
          cipherFormula(letter.codePointAt(0), numberOffset, 32, 33)
        )
      );
      newMessage.push(
        String.fromCodePoint(
          cipherFormula(letter.codePointAt(0), numberOffset, 32, 33)
        )
      );
    } else if (64 < letter.codePointAt(0) && letter.codePointAt(0) < 91) {
      console.log("Beginning: ", letter, letter.codePointAt(0));
      console.log(cipherFormula(letter.codePointAt(0), numberOffset, 65, 26));
      console.log(
        "Final",
        String.fromCodePoint(
          cipherFormula(letter.codePointAt(0), numberOffset, 65, 26)
        )
      );
      newMessage.push(
        String.fromCodePoint(
          cipherFormula(letter.codePointAt(0), numberOffset, 65, 26)
        )
      );
    } else if (96 < letter.codePointAt(0) && letter.codePointAt(0) < 123) {
      console.log("Beginning minúscula: ", letter, letter.codePointAt(0));
      console.log(cipherFormula(letter.codePointAt(0), numberOffset, 97, 26));
      console.log(
        "Final minúscula",
        String.fromCodePoint(
          cipherFormula(letter.codePointAt(0), numberOffset, 97, 26)
        )
      );
      newMessage.push(
        String.fromCodePoint(
          cipherFormula(letter.codePointAt(0), numberOffset, 97, 26)
        )
      );
    } else {
      newMessage.push(
        String.fromCodePoint(
          cipherFormula(letter.codePointAt(0), numberOffset, 32, 33)
        )
      );
    }
  }
  console.log(newMessage.join(""));
  alert(newMessage.join(""));
  return newMessage.join("");
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
    alert("el botón cipher funciona!!");
    console.log(numberOffset, inputTextarea);
    console.log("Probando una función suma:", aritmetica.sumar(3, 4));
    cipherMessage(inputTextarea, numberOffset);
    console.log(cipherMessage(inputTextarea, numberOffset));
  }
}

if (buttonCipher) {
  buttonCipher.addEventListener("click", goToCipher);
}

//Probando botón
alert("Hello, welcome to MessageCypher");
document.querySelector("#hello").addEventListener("click", myFunction);

function myFunction() {
  alert("hiciste click");
}

console.log("sumar", aritmetica.sumar(4, 5));
console.log("restar", aritmetica.restar(10, 5));
console.log(cipher);
