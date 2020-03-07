let numOne;

while (true) {
  numOne = +prompt("Enter number");
  if (!isNaN(numOne)) {
    break;
  } else {
    alert("Input incorrect");
    continue;
  }
}

let count = 0;

do {
  numOne /= 10;
  count++;
} while (numOne >= 1);

document.write(count);
