let arr = [1,2,5];
arr.push(6,7);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(9);
console.log(arr);


let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = a1.concat(a2);
console.log(a3);
let s = a3.join(" ");
console.log(s);
// a3.reverse();
// console.log(a3);

console.log(a3.indexOf(5));

// console.log(a3.slice(2,4));
a3.splice(3,0,19);
console.log(a3);
