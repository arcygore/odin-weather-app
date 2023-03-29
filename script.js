let cityName = '';
let regionName = '';
let currentTemp = 0;
let feelsLikeTemp = 0;
let precipitation = 0;
let lastUpdate = '';

fetch('http://api.weatherapi.com/v1/current.json?key=520f6dac622f4655b4f162125232703&q=30062/')
    .then(res => {
        return res.json()
    })
    .then(data => {
        updateData(data);
        displayData();
    })

function updateData(data) {
    // console.log(data)
    cityName = data.location.name
    regionName = data.location.region
    currentTemp = data.current.temp_f
    feelsLikeTemp = data.current.feelslike_f
    precipitation = data.current.precip_in
    lastUpdate = data.current.last_updated
}

function displayData() {
    console.log(cityName, regionName, currentTemp, feelsLikeTemp, precipitation, lastUpdate);
}