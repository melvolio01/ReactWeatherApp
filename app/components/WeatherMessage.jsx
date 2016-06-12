var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props;
    return (
      <h4 className="text-center message-color">It's {temp}°C in {location}.</h4>
    )
};

module.exports = WeatherMessage;