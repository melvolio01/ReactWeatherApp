var React = require('react');

var About = (props) => {
  return(
    <div>
      <h2 className="text-center">
      About</h2>

      <p>This is a simple weather app built using React JS</p>   

      <ul>
        <li>
        The app uses data from Open Weather Map's <a href="http://openweathermap.org">API</a>
        </li>
        <li>
        The JavaScript framework used was <a href="https://facebook.github.io/react">React</a>
        </li>
      </ul>
    </div>

    )
};

module.exports = About;