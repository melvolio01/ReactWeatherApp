var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return(
    <div>
      <h3 className="text-center">
      Some examples</h3>
      
      <p>Here are some locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Wrecsam'>Wrexham</Link>
        </li>
        <li>
          <Link to='/?location=Chiswick'>Chiswick</Link>
        </li>
      </ol>
    </div>
    )
};


module.exports = Example;