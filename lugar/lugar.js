const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '2ef1ff1d62msh6798a553cd29457p1b8e8ejsn96b0d580b504' }
    });

    const resp = await instance.get()

    if (resp.data.Results.lenght === 0) {

        throw Error(`No hay resultados para la direccion ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {

    getLugarLatLng
}