const URL = "https://api.openweathermap.org/data/2.5/"
const KEY = "df8e773fd574ed5eddc8bc2b674d3866"

const setQuery = (e) => {
    if(e.keyCode == "13")
    getResult(searchBar.value)
}

const getResult = (cityname) => {
    let query = `${URL}weather?q=${cityname}&appid=${KEY}&units=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector("#city")
    city.innerHTML = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector("#temp")
    temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector("#desc")
    desc.innerHTML = `<em>${result.weather[0].description}</em>`

    let minmax = document.querySelector("#minmax")
    minmax.innerHTML = `${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c`

}

let searchBar = document.getElementById("searchBar")
searchBar.addEventListener("keypress",setQuery)