function h(x,fun){
    // h ==== the higher oder function
    // fun ==== callback
    console.log(x*x);
    fun();
}
function func(){
    console.log("hello mr");
}
// h(10,func);

console.log("start");
setTimeout(function(){
    console.log("its done bro 1");
},2000);
setTimeout(function(){
    console.log("its done bro 2");
},1000);

console.log("end");
for(let i = 0; i<10000; i++);