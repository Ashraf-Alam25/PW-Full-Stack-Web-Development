let arr = [10,20,30];
arr.forEach(function(element, index, arr){
    // console.log(index, element, arr);
    
});

arr.forEach((element, index, arr) =>{
    // console.log("arrow fn "+index, element, arr);
});

const heroes = ["salma khan", 'am khan', 'karina kaif'];
heroes.forEach((ele, index, heroes) =>{
    // console.log(ele.toUpperCase(), index, heroes);
    
});

arr.map((ele, index, arr)=>{
    // console.log(index, ele, arr);
});

heroes.map((h, index, arr) =>{
    // console.log(index, h.toUpperCase(), arr);
});


// console.log(heroes);
const heroesWithKhan = heroes.filter((ele) =>{
    return ele.endsWith('khan');
});
// console.log(heroesWithKhan);

const cartBill = [20+40+360];
const sumOfCartBill  = cartBill.reduce((prev, curr) =>{
    prev + curr, 0;
})
// console.log(sumOfCartBill);


// check if all value are numbers
const gameScore = [20,34,201,23,500, 210];
const gameScoreCheck = gameScore.every((v) => typeof v === 'number');
// console.log("check: "+ gameScoreCheck);


const above200 = gameScore.find((score) => score > 200); // give one first greater val
// console.log(above200);

// find index, some , sort
const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);
