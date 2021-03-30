//ARROW FUNCTION
//parametrat duhen per te specifikuar userin
const hello = (name = "user", surname) => {
    console.log("Hello " + name)
}
//e njejte si :
// function hello(){

// }
hello("Vardona")

//SHEMBULL
const login = (name = "admin", password = "admin") => {
    var emri = document.getElementById("username").value
    var fjalekalimi = document.getElementById("password").value
    var success = document.getElementById("success")
    if (name == name && fjalekalimi == password) {
        success.innerHTML = "You are in!"
    }
    else {
        success.innerHTML = "Incorrect password or username!"
    }

}

//DSH

const changePassword = (password = "admin") => {
    //merre input
    //merre divin
    //kushtin
}


const products = {
    name: "Notebook",
    price: 3,
    stock: 200
}
//type: order or delivery
const transation = (type, { name, price, stock } = {}) => {
    console.log("Type: ", type, "Name: ", name, "Price:", price, "Stock:", stock)
}
transation("order", products) 