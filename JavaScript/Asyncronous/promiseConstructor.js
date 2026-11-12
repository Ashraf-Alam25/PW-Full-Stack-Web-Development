function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("timer done");
            reject(4);
        },2000);
    });
}

console.log("start");
let x = createPromise();
console.log("got new Promises");
x.then( function f(value){
    console.log("promise done "+ value);
}).catch(function g(value){
    console.log("handled " + value);
    
}).finally(function h(){
    console.log("finally ");
});

console.log("end");
for(let i = 0; i<=100000; i++){
    // code
    if(i==100000){
        console.log("loop end");
    }
}