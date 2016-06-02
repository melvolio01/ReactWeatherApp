var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9c06ba3145e9ab9c42f031f76bd245e9&units=metric';

// 9c06ba3145e9ab9c42f031f76bd245e9
//http://api.openweathermap.org/data/2.5/find?q=London&appid=9c06ba3145e9ab9c42f031f76bd245e9&units=metric

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}