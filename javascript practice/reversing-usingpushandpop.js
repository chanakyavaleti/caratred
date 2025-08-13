let numbers = [1, 2, 3, 5, 5, 3, 4, 5];
let ex = [];
// numbers.forEach(e=> ex.push(numbers.pop()))
let len = numbers.length - 1;

for (let i = 0; i <= len; i++) {
  ex.push(numbers.pop());
}
console.log(ex);
