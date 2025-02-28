/*
let is block scope but not var
let & var is function scope  

const function & block  : not reassignment in const 
*/

if(true){
    const x = 20
    console.log("the value of x : "+x)
    x=30
   console.log("the value of x : "+x)
}