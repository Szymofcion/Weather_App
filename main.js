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

        if (status.id >= 200 && status.id < 300) {
            photo.setAttribute('src', './img/thunderstorm.png')
        } else if (status.id >= 300 && status.id < 400) {
            photo.setAttribute('src', './img/drizzle.png')
        } else if (status.id >= 500 && status.id < 600) {
            photo.setAttribute('src', './img/rain.png')
        } else if (status.id >= 600 && status.id < 700) {
            photo.setAttribute('src', './img/rain.png')
        } else if (status.id >= 700 && status.id < 800) {
            photo.setAttribute('src', './img/rain.png')
        } else if (status.id === 800) {
            photo.setAttribute('src', './img/rain.png')
        }
        console.log(status.id);

        cityName.textContent = res.data.name
        temperature.textContent = Math.floor(temp) + '°C'
        humidity.textContent = humi + '%'
        weather.textContent = status.main
    }).catch(() => warning.textContent = 'Wpisałeś zła nazwe miasta')
}

const enterCheck = (e) => {
    if (e.key === 'Enter') {
        getWeather()
    }
}
input.addEventListener('keyup', enterCheck)
button.addEventListener('click', getWeather)


