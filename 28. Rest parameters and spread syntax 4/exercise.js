function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));

// Soluzione:
function sum2(...allNumbers) {
  return allNumbers.reduce((acc, current) => acc + current);
}

console.log(sum2(...numbers));
