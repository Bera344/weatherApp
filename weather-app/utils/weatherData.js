//ketu e marrim librarine e NODE "request-in"
const request = require("request")
//kjo lejon ti perdorim te dhenat e "config.js"
const constants = require("../config")

//callback mund te jete e sakte ose error
const weatherData = (address, callback) => {
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + "&appid=" + constants.openWeatherMap.SECRET_KEY
    console.log(url)
    callback(true)
}

module.exports = weatherData



//git config --global user.name "Bera344"
//git config --global user.email "bturtulla@gmail.com"
//git init
//git add -A