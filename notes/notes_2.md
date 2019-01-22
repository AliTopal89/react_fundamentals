// Popular Component
// we want to show each of these languages to the view
// map over all the languages and for each language in the array
// and we want to return a list item

// the reason why we have '( )' with return is that if you delete 
// the paranthesis JS is automatically going to return a semi-colon
// therefore it will ignore whatever you want to return in this case
// our list item JSX.

// add 'key={lang}' because we know all our languages are going to be unique

// the reason why we want state is because we are going to want to keep track 
// of which tab is active the way we do that first is add a constructor tab
// constructor is property of javascript classes is not unique to React. 
// then call this.state to whatever is the default state of our component.
// so when ever our component mounts shown on screen our default language is 
// going to be 'All'.

// we also add a updateLanguage method so that we can set a new state 
// for the selected language, so this.setState will update the state of 
// our app meaning a new language will be highlighted

// you dont know what 'this' keyword is bound to until you invoke updateLanguage
// if updateLanguage is invoked in the wrong context then this.setState is going to 
// be undefined, we can establish the 'this' keyword for a specific function 
// and that is by using .bind property. So we are going to use:

// this.updateLanguage = this.updateLanguage.bind(this)

// so we don't know what the 'this' keywoard is going to be bound to until
// update language is invoked but with '.bind' property we know .bind basically 
// takes in a context and is going to return a brand new function with this keyword
// inside of that function bound to whatever you pass in 
// what we are doing here is:
// hey this.updateLanguage - we want it to be a function whose 'this' in this.updateLanguage 
// keywoard is bound to the 'this' keywoard after '.bind'. 
// So no matter in what context updateLanguage is going to be called in, it is 
// always going to be callled in with the correct 'this' keywoard

// the whole goal of 'this.updateLanguage.bind(this)' is to make it so that 
// the 'this' keywoard inside updateLanguage(lang) is always the component instance itself
// which will have a setState property

// th whole reason why we are doing all this updateLanguage code is so that we can add
// a click handler to our list items so that whenever its clicked our updateLanguage will run
// and go ahead and update our new language. so whenever its clicked we are going update 
// 'this.updateLangauge' but the 'this' keywoard inside our <ul> is different so it would cause
// to return undefined. So what map allows us to do - as the second argument
// (after the curly brace and before parans and closing curly brace) is the specific context you want
// 'languages.map(function(lang)' to be invoked in, so we can add a comma and pass the second argument
// 'this'. Now the 'this' keywoard inside onClick is going to be the same as the this keywoard outside
// the 'languages.map(function(lang)' Now we are going to use .bind again because what .bind allows 
// us to do is pass in arguments with '.bind' so what we want onClick to be is - we want it to be a
// function - when its invoked its going to call updateLanguage method above it, passing it a specific language
// so go ahead pass it 'null' as we already bound it, so whatever arguments we pass it after 'null ' is going to 
// be passed in to the initial function (a.k.a 'updateLanguage(lang)'), when we pass in onClick
// 'this.updateLanguage.bind(null, lang)' is going to return us a new function its not going
// to invoke a function and when we click on it that function is going to be invoked and we are passing
// it a specific language, so its going to be passed the specific language it was clicked on. 

// to pass in the selected language as being higlighted: - 
// what style={} does is that it allows you to inline any styles that the list component has. 
// so if lang, which is the language we are iterating over equals whatever language is selected, then
// go ahead and the make the style with an object with that red color and if not go ahead and do nothing.  

```js

var React = require('react');

class Popular extends React.Component {
  constructor(props) {
  	super();
  	this.state = {
  	  selectedLanguage: 'All',
  	};

  	this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
  	this.setState(function() {
  	  return {
  	  	selectedLanguage: lang,
  	  }
  	});
  }
  render() {
	var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
	return (
	  <div>
	    <ul className='languages'>
	      {languages.map(function (lang){
	        return (
	      	  <li
	      	    style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
	      	    onClick={this.updateLanguage.bind(null, lang)} 
	      	    key={lang}>
	      	      {lang}
	      	  </li>
	       )	
	      }, this)}
	    </ul>
	  </div>
	)
  }
}
```

// we need to export it as well like we did in App.js
module.exports = Popular;