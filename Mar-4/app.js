
function Validate(){
    let First_name  = document.getElementById("firstname").value
    let Last_name = document.getElementById("lastname").value
    let Dob = document.getElementById("datebirth").value
    let Email = document.getElementById("email").value
    let Contact =document.getElementById("contact").value
    let Street = document.getElementById("Street").value
    let Landmark =document.getElementById("Landmark").value
    let Address = document.getElementById("address").value


    let name = /^[a-zA-Z]+$/
    let email =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 
    if (!First_name.match(name)) {
        document.write("first name is incorrect")
    }
    if (!Email.match(email)) {
        document.write("enter correct mail")
    }



    return false
}