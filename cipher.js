function cipherFormula(numberUnicode, offset, number1, mod) {
  const result = ((numberUnicode + offset - number1) % mod) + number1;
  return result;
}

function decipherFormula(numberUnicode, offset, number1, mod) {
  let result;
  if (numberUnicode - offset - number1 >= 0) {
    result = ((numberUnicode - offset - number1) % mod) + number1;
  } else {
    result = ((numberUnicode - offset - number1) % mod) + number1 + mod;
  }

  return result;
}

function cipherMessage(string, numberOffset) {
  const arrMessage = [...string];
  const numberOfElements = arrMessage.length;
  const newMessage = [];

  for (let i = 0; i < numberOfElements; i++) {
    const letter = arrMessage[i];

    if (31 < letter.codePointAt(0) && letter.codePointAt(0) < 65) {
      newMessage.push(
        String.fromCodePoint(
          cipherFormula(letter.codePointAt(0), numberOffset, 32, 33)
        )
      );
    } else if (64 < letter.codePointAt(0) && letter.codePointAt(0) < 91) {
      newMessage.push(
        String.fromCodePoint(
          cipherFormula(letter.codePointAt(0), numberOffset, 65, 26)
        )
      );
    } else if (96 < letter.codePointAt(0) && letter.codePointAt(0) < 123) {
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
  alert(newMessage.join(""));
  return newMessage.join("");
}

function decipherMessage(string, numberOffset) {
  const arrMessage = [...string];
  const numberOfElements = arrMessage.length;
  const newMessage = [];

  for (let i = 0; i < numberOfElements; i++) {
    const letter = arrMessage[i];

    if (31 < letter.codePointAt(0) && letter.codePointAt(0) < 65) {
      newMessage.push(
        String.fromCodePoint(
          decipherFormula(letter.codePointAt(0), numberOffset, 32, 33)
        )
      );
    } else if (64 < letter.codePointAt(0) && letter.codePointAt(0) < 91) {
      newMessage.push(
        String.fromCodePoint(
          decipherFormula(letter.codePointAt(0), numberOffset, 65, 26)
        )
      );
    } else if (96 < letter.codePointAt(0) && letter.codePointAt(0) < 123) {
      newMessage.push(
        String.fromCodePoint(
          decipherFormula(letter.codePointAt(0), numberOffset, 97, 26)
        )
      );
    } else {
      newMessage.push(
        String.fromCodePoint(
          decipherFormula(letter.codePointAt(0), numberOffset, 32, 33)
        )
      );
    }
  }
  alert(newMessage.join(""));
  return newMessage.join("");
}
export const cipher = {
  cipherFormula,
  decipherFormula,
  cipherMessage,
  decipherMessage,
};
