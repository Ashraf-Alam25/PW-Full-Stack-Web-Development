let score = 8;
function one() {
    let score = 0;
    console.log(score);
}
function two(){
    let score = 3;
    console.log(score);
}
function three(){
    console.log(score);
}
// one();
// two();
// three();
// console.log(score);

function outerFunc(){
    let outervar = 'i am a scope level 1';
    function innerFunc(){
        let innervar = 'i am a scope level 2';
        console.log(outervar);
    }
    console.log(innervar);
    innerFunc();
}
// outerFunc();



const myGolableValue = 0;
function func(){
    const val1 = 1;
    console.log(myGolableValue);

    function inneroffunc(){
        const val2 = 9;
        console.log(val2,val1,myGolableValue);

        function innerOfInnerFunc(){
            const val3 = 3;
            console.log(val3,val2,val1,myGolableValue);
        }
        innerOfInnerFunc();
    }
    inneroffunc();
}
// func();


// closure
function superfun(){
    let outerValue = 'i am outer';
    function minorFunc(){
        console.log(outerValue);
    }
    minorFunc();
}
// superfun();


const errorMessage = "file not found";
setTimeout(function callback(){
    console.log(errorMessage);
},1000);

let pagecount = 0;
const items = [1,2,3,4];
items.forEach(function iterator(num){
    pagecount++;
    console.log(num);
});
console.log("page counnt"+pagecount);

