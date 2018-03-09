// "this" keyword inside of handleSubmit function
// awlays going to be refering our instance this.handleSubmit.bind("this" ~ instance)
// which is the battle component
// id -> playerOne/playerTwo

// setState needs to return an object which is going to be merged with the previous state
// so we are gonig to make a new variable "newState"

// this.props.label - we passed that in <PlayerInput label = Player One/>

// we want to bind our value of state to input field - value={this.state.username}
// and we can keep this.state.username from above up-to-date by calling onChange property.

// handleSubmit(event){
	//event.preventDefault - because we don't want this form to submit to a server

// Battle component is initially going to render two Player Inputs
// when Player input renders its going to render the <form>
// when the user types in to the input field our onChange function is going to run
// which will update our state and our value -> value={this.state.username}
// and when the user clicks on submit button, this.handleSubmit is going to run
// and its going to call this.props.onSubmit, passing it an id and username
// then thats going to run "handleSubmit(id, username)" which will update our 
// newState", which will rerender the <PlayerInput>

var React = require('react');
var PropTypes = require('prop-types');

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        username: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }
  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>{this.props.label}</label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          value={this.state.username}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
            Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

PlayerInput.defaultProps = {
  label: 'Username',
}

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState;
    });
  }
  render() {
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />}

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />}
        </div>
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

