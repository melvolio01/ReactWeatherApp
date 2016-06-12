var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return(
    <div>
      <h3 className="text-center page-title">
      Examples</h3>
      <p>Here are some examples to try</p>
      
      
      <ol>
        <li>
          <Link to='/?location=Wrecsam'>Wrecsam</Link>
        </li>
        <li>
          <Link to='/?location=Chiswick'>Chiswick</Link>
        </li>
      </ol>
    </div>
    )
};


module.exports = Example;