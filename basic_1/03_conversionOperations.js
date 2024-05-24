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

// :::::::::::::::::::::::::::::::::Operations::::::::::::::::::::::::::::::::::::::::::

let a = 3
let b = 4
let c = a + b
// console.log("c",c)

// console.log("2" + 2 + 2)   //222  inlcude all string
// console.log(2 + 2 + "2")  // 42   first calculate value and add string
// console.log(2 + "2" + 2)  // 222

let x = 3
let y = ++x
// console.log(y)   //4  for prefix

let m = 5
let d = m++
// console.log(d)

let w = 4
let r = w++ + 2
// console.log(r)
// console.log(w);

let y1 = 3
let y2 = y1++
// console.log(`y1:${y1},y2:${y2}`)


let x1 =2   
let q = ++x1
  // prefix use for  output is x1=3 and q = 3
console.log("x1 value:",x1 ,"q value:",q)

let a1 = 4
let a2 = a1++    //postfix use for  output a1 = 4 and a2 = 5
console.log("a1 value:",a1 ,"a2 value:",a2)







