// Part 1
let aForm = document.querySelector("#alertForm")
let aInput = document.querySelector("#alertInput")

aForm.addEventListener("submit", function(event){
   event.preventDefault();
   alert(aInput.value)
   alertInput.value = ""
})

//Part 2
let sandwichForm = document.querySelector("#sandwichForm")

let ingredients = document.querySelectorAll("#sandwichForm .ingredients")

for(let item of ingredients){
console.log(item.id)
}

sandwichForm.addEventListener("submit", function(event){
    event.preventDefault();

    let newStr = ""
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
            newStr += `${ingredients[i].id}, `
        }
    }
    console.log(newStr)
    alert(`Your sandwich contains; ${newStr}`)
})

let appointment = document.querySelector("#haircutAppointment")
let date = document.querySelector("#day")
let lHair = document.querySelector("#longHair")
let sHair = document.querySelector("#shortHair")
let hairType = document.querySelector("#hair")
let barber = document.querySelector("#barber")

appointment.addEventListener('submit', function(event){
     event.preventDefault();
     console.log(date);
  
    


let hairType = "";
if(lHair.checked === true){
   hairType = 'Long Hair'
} else if(sHair.checked === true){
   hairType = "Short Hair"

} 
alert(`Appointment schedule for ${date.value}: stylist ${barber.value} hairtype: ${hairType} `)
})



createAccount = document.querySelector("#account")
username = document.querySelector("#userName")
email = document.querySelector("#email")
password = document.querySelector("#password")


createAccount.addEventListener(`submit`, function(event){ 
  event.preventDefault();


  console.log(createAccount)

  alert(`Your username is ${username.value}, Your email address is ${email.value} and your password is: xxxxxxx`)
})