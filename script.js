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
  num = num.toString().toUpperCase();
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

// INPUT FIELDS //
let binaryInput = document.getElementById("binary-input");
let octalInput = document.getElementById("octal-input");
let decimalInput = document.getElementById("decimal-input");
let hexaInput = document.getElementById("hexa-input");

// BUTTON BEHAVIOURS //
document.getElementById("binary-button").onclick = () => calculate(binaryInput, 2);
document.getElementById("octal-button").onclick = () => calculate(octalInput, 8);
document.getElementById("decimal-button").onclick = () => calculate(decimalInput, 10);
document.getElementById("hexa-button").onclick = () => calculate(hexaInput, 16);

function calculate(inputField, base) {
  let num = inputField.value;
  let dec = toDecimal(num, base);
  
  binaryInput.value = decimalToBase(dec, 2);
  octalInput.value = decimalToBase(dec, 8);
  decimalInput.value = dec;
  hexaInput.value = decimalToBase(dec, 16);
}
