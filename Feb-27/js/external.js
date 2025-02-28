// function is keyword for declaring or define js function 

let x = () => {
    let num1 = document.getElementById("x").value
    let num2 = document.getElementById("y").value

    // convert into requ. data types 
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    document.getElementById("result").innerHTML = num1+num2
}