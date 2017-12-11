var React = require('react');

// Popular Component
// we want to show each of these languages to the view
// map over all the languages and for each language in the array
// and we want to return a list item

// the reason why we have '( )' with return is that if you delete 
// the paranthesis JS is automatically going to return a semi-colon
// therefore it will ignore whatever you want to return in this case
// our list item JSX.

class Popular extends React.Component {
  render() {	
	var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
	return (
	  <ul className='languages'>
	    {languages.map(function (lang){
	      return (
	      	<li>
	      	  {lang}
	      	</li>
	    )	
	    })}
	  </ul>
	)
  }
}

// we need to export it as well like we did in App.js

module.exports = Popular;