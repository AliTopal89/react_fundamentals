// npm install --save prop-types

// popular js is also going to render the grid with popular repositories
// not only the popular languages component
// with reafactoring we no longer have this.state.selectedLanguage 
// and this.updateLanguage function on our instance anymore because
// it lives in our Popular component

// now when we render out selectLanguage so therefore we'll pass
// selectedLanguage and onSelect as prop and now we have to require
// propTypes. 

// where we are using languages array is in our SelectLanguage component
// so we can pass it in as a prop but we are not using languages anywhere
// else besides the SelectLanguage component

// class SelectLanguage extends React.Component {}
// if all your component has a render method.. instead of creating a class like above comment
// you can just make a function also now with the function we don't have access
// to "this." keyword anymore so instead we are going to pass it in props

// in React whenever you have function like
// "function SelectLanguage (props){}" its called stateles functional component
// because it doesn't have a state and everything we are receiving is a prop
// its just a function returning some UI


var React = require('react');
var PropTypes = require('prop-types'); // ES5 with npm

function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

// and now we require two proptypes

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    });
  }
  // <div> is for us to wrap everything we return from our selectLanguage function  
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}

module.exports = Popular;