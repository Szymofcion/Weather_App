const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=9735c28d773ac4490f06eca31c5c07a6'
const API_UNITS = '&units=metric '

const getWeather = () => {
    const city = input.value || 'London'
    const URL = API_LINK + city + API_KEY + API_UNITS
    axios.get(URL).then(res => {
        const temp = res.data.main.temp
        const humi = res.data.main.humidity
        const status = res.data.weather[0]
        cityName.textContent = res.data.name
        temperature.textContent = Math.floor(temp) + '°C'
        humidity.textContent = humi + '%'
        weather.textContent = status.main
    })
}
button.addEventListener('click', getWeather)
