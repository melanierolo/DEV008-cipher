import cipher from "./cipher.js";
import { aritmetica } from "./functions.js";

document.querySelector("#hello").addEventListener("click", myFunction);

function myFunction() {
  alert("hiciste click");
}

console.log("sumar", aritmetica.sumar(4, 5));
console.log("restar", aritmetica.restar(10, 5));
console.log(cipher);
