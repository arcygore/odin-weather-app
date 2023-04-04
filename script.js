const submitBtn = document.querySelector('button')
const inputLocation = document.querySelector('input')
const weatherContainer = document.querySelector('.weather-container')

let cityName = '';
let regionName = '';
let currentTemp = 0;
let feelsLikeTemp = 0;
let precipitation = 0;
let lastUpdate = '';

function fetchData(location) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=520f6dac622f4655b4f162125232703&q=${location}/`, { mode: 'cors' })
        .then(res => {
            return res.json()
        })
        .then(data => {
            updateData(data);
            displayData();
        })
        .catch(rej => console.log("REJECTED:", rej));
}

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
    const weatherCard = document.createElement('div')
    const weatherLocation = document.createElement('header');
    const weatherTemp = document.createElement('h2');
    const weatherTempFeels = document.createElement('h3');
    const weatherPrecip = document.createElement('p');
    const weatherUpdated = document.createElement('footer');
    weatherCard.classList.add('weather-card')
    weatherLocation.innerText = `${cityName}, ${regionName}`;
    weatherTemp.innerText = `${currentTemp.toPrecision(2)}℉`
    weatherTempFeels.innerText = `Feels like: ${feelsLikeTemp.toPrecision(2)}℉`
    weatherPrecip.innerText = `Precipitation: ${precipitation}"`
    weatherUpdated.innerText = `Last Updated: ${lastUpdate}`
    weatherCard.appendChild(weatherLocation)
    weatherCard.appendChild(weatherTemp)
    weatherCard.appendChild(weatherTempFeels)
    weatherCard.appendChild(weatherPrecip)
    weatherCard.appendChild(weatherUpdated)
    weatherContainer.appendChild(weatherCard)
}

function clearData() {
    weatherContainer.innerHTML = '';
}

submitBtn.addEventListener('click', (e) => {
    console.log(inputLocation.value);
    clearData();
    fetchData(inputLocation.value); 
})

