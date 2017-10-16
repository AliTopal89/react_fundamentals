var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// the way you set your UI for a specific component 
//is with your render method

//component definition
class App extends React.Component {
  render() {
  	return (
  	  <div>
  	    Hello React Training!
  	  </div>

  	)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
