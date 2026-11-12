let emptySet = new Set()
// console.log(emptySet.size);

let myArr = [3,3,4,5];
let newSet = new Set([...myArr]);
// console.log(newSet);
newSet.add(10);
// console.log(newSet);
newSet.clear();
// console.log(newSet);

// console.log(newSet.has(3));


// SET DIFFERENCE

function setDifference(setA, setB){
    return new Set([...setA].filter(el => !setB.has(el)));
} 


let map = new Map();
console.log(map.size);
let arr =[
    [1, "rabia"],
    [2, "alka"],
    [3, "hiba"],
    [4, "aayat"],
];

arr.map((arrayItems) => map.set(arrayItems[0],arrayItems[1]));
