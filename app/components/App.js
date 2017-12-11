var React = require('react');
var Popular = require('./Popular')

// the way you set your UI for a specific component 
//is with your render method

// our main entry point to our application

// the reason we use className instead of class is that 
// class is already a reserved keyword in JS, because it 
// already means something else. 

class App extends React.Component {
  render() {
  	return (
  		// what popular is rendering is the div that we created
  		// in Popular.js
  	  <div className='container'>
  	    <Popular />
  	  </div>

  	)
  }
}
// now that we are requiring App.js in our index.js file
// we need to make sure we export it

module.exports = App;
