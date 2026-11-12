// SPREAD

const oneArray = [1,3,4,5];
const twoArray = [6,7,8,8];

// const threeArray = oneArray.concat(twoArray);
// const threeArray = [oneArray, twoArray];
const threeArray = [...oneArray,...twoArray];
// console.log(threeArray);

//############################################
// REST

function manyArgument(){
    let args = Array.from(arguments);
    let arr = args.map(e => e);
    console.log(arr);
}
// manyArgument(1,2,3,4,5);
// manyArgument(1,2,3,4,5,6,7);


function manyArgumentv2(...args){
    let arr = args.map(e => e);
    console.log(arr);
}
manyArgument(1,2,5);
manyArgument(1,2,3);