function sumUntil(maxValue) {
  let array = [];
  for (let i = 0; i <= maxValue; i++) {
    array.push(i);
  }
  let total = 0;
  let i;
  for (i in array) {
    total = total + array[i];
  }
  return total;
}
console.log(sumUntil(5));