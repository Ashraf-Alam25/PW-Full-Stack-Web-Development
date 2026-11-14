function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("timer done");
            reject(4);
        },2000);
    });
}

async function name() {
    try{
        console.log("inside the function ");
        const response1 = await createPromise();
        const response2 = await createPromise();
        console.log("response is ", response1);
        // console.log("response is ", response2);
    }
    catch{
        console.log("handled");
    }

}
console.log("start");
name();
console.log("end");




//###########################################

// fetch("https://dummyjson.com")  // have to change link
//   .then(function f(response) {
//     return response.json(); 
//   })
//   .then(function f(value) {
//     console.log(value);
//   });