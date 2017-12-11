var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
// we just want index.js to require the main app
var App = require('./components/App');

// the way you set your UI for a specific component 
//is with your render method

//component definition

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
