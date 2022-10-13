let button = document.querySelector(".button button");
let newName=document.querySelector(".name")
let newSurname=document.querySelector(".surname")
let newEmail=document.querySelector(".email")
button.addEventListener("click", function(){
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;

    if(!name.trim().length){
        alert("Please Input Name")
    }
    else{
        if(!surname.trim().length){
            alert("Please Input Surname")
        }
    
        else{
            if(!email.trim().length){
                alert("Please Input Email")
            }
        
            else{
                newName.innerHTML+=`${name} `
                newSurname.innerHTML+=`${surname}`
                newEmail.innerHTML+= `${email}`
             }
        }
    }

})