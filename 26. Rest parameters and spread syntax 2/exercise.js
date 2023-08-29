function sum(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

console.log(sum(1, 2, 3, 4, 5));

// Soluzione:
function sum2(...numbers) {
  return numbers.reduce((acc, current) => acc + current);
}

console.log(sum2(1, 2, 3, 4, 5));
