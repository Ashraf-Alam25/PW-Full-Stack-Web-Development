// let pattern = 'pw';
// let regExpOne = new RegExp(pattern);

// let flag = 'gi';
// let regExpTwo = new RegExp(pattern ,flag);

let regExThree = /bit/gi;
const strToCheck = "Using XOR to compare two binary number Counting differing bits Understanding bit masks Applying Bit Manipulation to solve problems efficiently";

const result = regExThree.test(strToCheck);
console.log(result);

const anotherResult = strToCheck.match(regExThree);
console.log(anotherResult);

const rep = strToCheck.replace(regExThree,'P-W');
console.log(rep);

const weburl = "https://pwskills.com/hitesh%20choudhry";
const useurl = weburl.replace(/%\d\d/gi,'-');  //\d 1 digit consider \d\d 2 digit cons..
console.log(useurl);

let email = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
const stringss = "with Tests mode The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community and view patterns you create or favorite in My Patterns.Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English. ashrafalam6852@gmail.com";

const useemail = stringss.match(email);
console.log(useemail);

// free website for reference : https://regexr.com/
