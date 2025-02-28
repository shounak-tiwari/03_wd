/*
* entry control
    while 

    for 
* exit control
    do while 
*/





function x() {
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value

    // string 
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let max = (num1>num2) ? num1 : num2;

    while (true) {
        if(max%num1==0 && max %num2 ==0){
            document.write("lcm " + max)
            break;
        }
        else{
            max++;
        }
    }
}




function countshow() {

        // for index loop
    // for (let i = 0; i < 10; i++) {
    //     document.write(students[i] +"<br>")
    // }


        // for in loop
    // for (const i in students) {
    //     document.write(students[i]+"<br>")
    // }

    //     // for each loop
    // students.forEach(element => {
    //     document.write(element+"<br>")
    // });
}
const students = [
    [1, "Alice Johnson", 18, "A", "Math"],
    [2, "Bob Smith", 19, "B", "Science"],
    [3, "Charlie Brown", 17, "A", "English"],
    [4, "David Williams", 20, "C", "History"],
    [5, "Emma Davis", 18, "B", "Physics"],
    [6, "Frank Miller", 19, "A", "Chemistry"],
    [7, "Grace Wilson", 17, "B", "Biology"],
    [8, "Henry Thomas", 18, "A", "Computer Science"],
    [9, "Isabella Garcia", 20, "C", "Economics"],
    [10, "Jack Martinez", 19, "B", "Geography"]
];




function searchdata() {
    
    let enterdrollno = document.getElementById("enterdrollno").value
    let count = 0;
    for (let index = 0; index < students.length; index++) {
        
        if (students[index][0] ==enterdrollno) {
            count++;
            document.write(students[index])
        }
    }
    if (count==0) {
        document.write("data not found")
    }
}
