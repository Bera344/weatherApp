//API (Aplication Programm Interface) marrja e te dhenave te gatshme nga nje server tjeter ne serverin tend


const express = require("express")
const path = require("path")
const hbs = require("hbs")
// const request = require("request")
const weatherData = require("../utils/weatherData")
const { request } = require("https")

//krijimi i serverit
const app = express()




//i THERRASIM PATHAT (Define Paths)
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPaTh = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partial")



//Setup per perdorimin e fajllave
//i tregojme serverit cfare lloje te fajllave do ti perdorim
app.set("view engine", "hbs")
//Fajllat dinamik, per cdo views do ti marr pathet e views
app.set("views", viewsPaTh)
//do te regjistron cdo gje qe gjendet ne partials
hbs.registerPartials(partialsPath)



//Setupi per fajlla statik
app.use(express.static(publicDirectoryPath))







//ROUTES
//get homepage url/localhost: 3000 kjo eshte njejte si www.vardona.com
//parametri i pare stringu i zbrazet "" eshte url-ja qe e shenon useri
app.get("", (request, respond) => {
    //.render e perkthen fajlin qe e ka emrin index
    respond.render("index", {
        title: "Weather",
        name: "Vardona Bytyqi"
    })
})





//URL: localhost: 3000/help kjo eshte njejte si www.vardona.com/hepl 
//"" eshte url-ja 
app.get("/help", (request, respond) => {
    respond.render("help", {
        title: "Help",
        name: "Vardona Bytyqi",
        heplText: "Ask one of our agent for help!"
    })
})


app.get("/about", (request, respond) => {
    respond.render("about", {
        title: "About",
        name: "Vardona Bytyqi",
        img: "/images/foto.png"
    })
})


app.get("/weather", (request, respond) => {
    if (!request.query.address) {
        return respond.send({
            error: "You must provide an address!"
        })
    }
    // console.log(request.query.address)
    // respond.send({
    //     forecast: "it's sunny today",
    //     location: " Prizren ",
    //     address: request.query.address

    // })
})



weatherData(address, (error, { temperature, description, cityName } = {}) => {
    if (error) {
        return res.send({
            error
        })
    }
    console.log(temperature, description, cityName);
    res.send({
        temperature,
        description,
        cityName
    })
})






//WEATHER DATA

app.get("/weather", (request, respond) => {

    const address = request.query.address

    weatherData(address, (result) => {
        console.log(result)
    })
})















//EXAMPLE

// app.get("/products", (request, respond) => {
//ketu po e printojme kerkesen e bere te nje user tjeter dhe shohim si vijne te dhenat
// if (!request.query.serach) {
//ketu perdorim returnin ne menyre qe mos te bie ndesh me respon.send qe e kemi pasur me poshte
//         return respond.send({
//             error: "You must choose a product!"
//         })
//     }
//     console.log(request.query.serach)
//     respond.send({
//         products: ["pc", "maus"]
//     })
// })









//Node-I I SHIKON DERI TE YLLI "*" e pas asaj nuk i shikon!
//Ylli "*" nenkupton gjithcka pervec atyre q i kemi ne 
app.get("*", (request, respond) => {
    respond.render("404", {})
})



app.listen(3000, () => {
    console.log("Server is working!")
})