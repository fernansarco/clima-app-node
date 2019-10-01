const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=61633f4d0c32f4fcd6ce6aae9ccc9954&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}