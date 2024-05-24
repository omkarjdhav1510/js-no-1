let score = 33
// console.log(typeof score);
let converString = String(score) // convert string
// console.log(converString)
// console.log(typeof converString);

let score1 = ""
let score2 = "33abc";
let convertNum = Number(score1) //convert number => 0 
let convertNum2 = Number(score2) //convert number =>NaN(not a number)
// console.log(convertNum)
// console.log(typeof convertNum);
// console.log(typeof convertNum2)
// console.log(convertNum2);

let convertBoolean = Boolean(score1)  //convert boolean => false
// console.log(convertBoolean)
let score3 = true
let score4 = false
let convertNumber = Number(score3)  //convert boolean to number
let convertNumber1 = Number(score4)
// console.log(convertNumber);
// console.log(convertNumber1);

let score5 = null
let score6 = undefined
let convertobject = Number(score5)
let convertobject1 = Number(score6)
// console.log(convertobject)
// console.log(convertobject1)

/* 
note for convert string to number
"33" => 33  
"33abc" => NaN(not a number)
false => 0
true => 1
null => 0
undefined => NaN

*/





