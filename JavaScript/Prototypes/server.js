let myHeros = ["thor", "Spiderman"];
let dcHeroes = ["batman","flash","superman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpidermanPower: function() {
        console.log('spidy power is ${this.spiderman}');
        
    }
}

Object.prototype.ashraf = function(){
    console.log("ashraf is present in all objects");
}
// console.log(myHeros.ashraf());
// console.log(heroPower.ashraf());

Array.prototype.heyAshraf = function(){
    console.log("ashraf say hi");
}
// console.log(myHeros.heyAshraf());
// console.log(heroPower.heyAshraf());




// inheritance
const user ={
    name : "fist name",
    email : "first@gmail.com",
}
const teacher = {
    makeVidoes : true,
}
const teachingSupport ={
    isAvailable : false
}
const TAAssistant = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__: teachingSupport  // 1st way
}
// console.log(TAAssistant.isAvailable);
teacher.__proto__ = user; // 2nd way 
// console.log(teacher.email);

Object.setPrototypeOf(teachingSupport,teacher); // 3rd way to inherit
// console.log(teachingSupport.makeVidoes);





String.prototype.trueLength = function() {
    console.log(`True length is ${this.trim().length}`);
}

"ashraf   ".trueLength();