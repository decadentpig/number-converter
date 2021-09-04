function decimalToBase(num, base) {
  let result = "";
  let hexadecSet = ["A", "B", "C", "D", "E", "F"];

  while (num >= 1) {
    num = Math.floor(num);

    if (base != 16 || num % base < 10) {
      result = result.concat(num % base);
    } else {
      result = result.concat(hexadecSet[(num % base) - 10]);
    }

    num = num / base;
  }

  return result.split("").reverse().join("");
}

function toDecimal (num, base) {
  let result = 0;
  let split = num.split("").reverse();
  
  if (base == 16) {
    for (let i in split) {
      switch (split[i]) {
        case "A":
          split[i] = 10;
          break;
        case "B":
          split[i] = 11;
          break;
        case "C":
          split[i] = 12;
          break;
        case "D":
          split[i] = 13;
          break;
        case "E":
          split[i] = 14;
          break;
        case "F":
          split[i] = 15;
          break;
      }
    }
  }

  for (let i = 0; i < split.length; i++) {
    result += split[i] * (base ** i);
  }

  return result;
}

// BUTTON BEHAVIOURS //
document.getElementById("binary-button").onclick = () => binaryGo();
document.getElementById("octal-button").onclick = () => octalGo();
document.getElementById("decimal-button").onclick = () => decimalGo();
document.getElementById("hexa-button").onclick = () => hexaGo();

// INPUT FIELDS //
let binaryInput = document.getElementById("binary-input");
let octalInput = document.getElementById("octal-input");
let decimalInput = document.getElementById("decimal-input");
let hexaInput = document.getElementById("hexa-input");

function binaryGo() {
  let num = binaryInput.value;
  let dec = toDecimal(num, 2);
  
  octalInput.value = decimalToBase(dec, 8);
  decimalInput.value = dec;
  hexaInput.value = decimalToBase(dec, 16);
}

function octalGo() {
  let num = octalInput.value;
  let dec = toDecimal(num, 8);
  
  binaryInput.value = decimalToBase(dec, 2);
  decimalInput.value = dec;
  hexaInput.value = decimalToBase(dec, 16);
}

function decimalGo() {
  let num = decimalInput.value;
  let dec = toDecimal(num, 10);
  
  binaryInput.value = decimalToBase(dec, 2);
  octalInput.value = decimalToBase(dec, 8);
  hexaInput.value = decimalToBase(dec, 16);
}

function hexaGo() {
  let num = hexaInput.value;
  let dec = toDecimal(num, 16);
  
  binaryInput.value = decimalToBase(dec, 2);
  octalInput.value = decimalToBase(dec, 8);
  decimalInput.value = dec;
}
