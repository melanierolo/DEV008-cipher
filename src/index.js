import cipher from "./cipher.js";

const buttonCipher = document.getElementById("cipher");
const buttonDecipher = document.getElementById("decipher");
const buttonCopy = document.getElementById("copy");
const empezarButton = document.getElementsByName("empezarButton")[0];

//Validando que los botones existen para no generar un ERROR
if (buttonCipher || buttonDecipher || empezarButton) {
  empezarButton.addEventListener("click", goToPageCipher);
  buttonCipher.addEventListener("click", goToCipher);
  buttonDecipher.addEventListener("click", goToDecipher);
  buttonCopy.addEventListener("click", goToCopy);
}

function goToPageCipher() {
  const inputUserName = document.getElementsByName("userName")[0].value;
  const goToCipher = window.location.href.includes("index.html")
    ? window.location.href.replace("/index.html", "/")
    : window.location.href;
  //alert("url-location", goToCipher);

  if (inputUserName === "") {
    alert("Por favor, no te olvides de ingresar tu nombre 😁 .");
  } else {
    window.location.assign(goToCipher + "pages/cipher.html");
  }
}

function goToCipher() {
  const inputOffset = document.getElementsByName("cipher__input")[0].value;
  const inputTextarea = document.getElementsByName("cipher__textarea")[0].value;
  //offset es un string al venir del input entonces lo convierto en un number
  const numberOffset = parseFloat(inputOffset);
  const cipherText = document.getElementById("cipher__text");

  if (numberOffset < 1 || Number.isInteger(numberOffset) === false) {
    alert(
      "Por favor,ingrese el valor del offset como un número entero positivo (Ej. 4,5,etc)."
    );
  } else {
    cipherText.innerHTML = cipher.cipherMessage(numberOffset, inputTextarea);
    console.log(cipher.cipherMessage(numberOffset, inputTextarea));
  }
}

function goToDecipher() {
  const inputOffset = document.getElementsByName("cipher__input")[0].value;
  const inputTextarea = document.getElementsByName("cipher__textarea")[0].value;
  //offset es un string al venir del input entonces lo convierto en un "number"
  const numberOffset = parseFloat(inputOffset);
  const cipherText = document.getElementById("cipher__text");

  if (numberOffset < 1 || Number.isInteger(numberOffset) === false) {
    alert(
      "Por favor,ingrese el valor del offset como un número entero positivo (Ej. 4,5,etc)."
    );
  } else {
    alert("el botón decipher funciona!!");
    cipherText.innerHTML = cipher.decipherMessage(numberOffset, inputTextarea);
    console.log(cipher.decipherMessage(numberOffset, inputTextarea));
  }
}

function goToCopy() {
  const copyText = document.getElementsByClassName("cipher__text")[0].innerText;
  if ("Falta ingresar el texto que desea cifrar o descifrar." !== copyText) {
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        if (buttonCopy.innerText !== "Copiado!") {
          const originalText = buttonCopy.innerText;
          buttonCopy.innerText = "Copiado!";
          setTimeout(() => {
            buttonCopy.innerText = originalText;
          }, 2500);
        }
      })
      .catch((err) => {
        console.log("Algo salió mal", err);
      });
  }
}
