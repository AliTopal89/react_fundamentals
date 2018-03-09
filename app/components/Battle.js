var React = require('react');

class Battle extends React.Component {
  render () {
  	return (
  	  <div>
  	    BATTLE !
  	  </div>
  	)
  }
}

module.exports = Battle;

// Pre code comments:

// React is all about managing state. 
// Controlled component - Instead of going and grabbing the component 
// from the dom, you bind the value of the input field to whatever the 
// property of state object is.
// You bind the input field to what ever the state value is, and that way
// when you update the value of state, the input field is going to change.
//
// We are passing an onSubmit function to the child component and that is
// going to update the parent component. The function in child component
// will receive a specific state and when it is invoked with that specific
// child state it will update the parent state. 

