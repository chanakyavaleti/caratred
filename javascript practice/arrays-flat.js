
let numbers = [1, 2, [3, 4, [5, 6, [7, 8,1, 2, [3, 4, [5, 6, [7, 8]]]]]]];

let f= numbers.flat(10);
console.log(f);


let d= numbers.flat(1);
console.log(d);