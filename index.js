const APIKey = "c2bb98b086472bc4a4fa5a5ed2bc9fef";
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function weatherData(cityName){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIKey}`)
    .then(response => response.json())
    .then(receiveData => {
        console.log(receiveData);
        const lat = receiveData[0].lat
        const lon = receiveData[0].lon
        const searchedCity = receiveData[0].local_names.en
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`)
        .then(response => response.json())
        .then(receiveData =>{
        console.log(receiveData);
        })
    })
}
weatherData("irvine")