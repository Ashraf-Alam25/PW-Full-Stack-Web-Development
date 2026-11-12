const powerTo = (n) => {
    return n**2;
}
// console.log(powerTo(3));
function powerCube(powerTo, n){
    return powerTo(n) *n;
}
// console.log(powerCube(powerTo,3));



function sayHello(){
    return () => {
        console.log("hello");
    }
}
let guessValue = sayHello();
// console.log(guessValue);
// guessValue();


const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return n+m+p;
        }
        return twoFun;
    }
    return oneFun;
}
// console.log(higherOrder(2)(3)(4));



const myNums = [1,2,3,4,5,6,7,8,9,10];
const sumArray = arr =>{
    let total = 0;
    arr.forEach(function(i) {
        total += i;
    });
    return total;
}
// console.log(sumArray(myNums));



function oneMoreHello(){
    console.log("Hello Ashraf sir !",Math.random());
}
setInterval(oneMoreHello, 1000); // every 1second print infinite time 
// setTimeout(oneMoreHello, 2000); // execute one time afer 2second
