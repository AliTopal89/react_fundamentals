var React = require('react');
var NavLink = require('react-router-dom').NavLink;

// function Nav () is not going to have any state
// and any lifecycle methods to it so we can make it a stateless
// functional component

// "Link" is the absolute fundementals for creating an
// anchor tag

// but you want "NavLink" because sometimes you want to dinamically 
// change the style of the specific anchor tag based on if that 
// route is active.

// this "activeClassName" is going to be applied whenever the route is active.
// Home is going to be active whenever we go to a route that starts with "/"

// what we can do is add "exact" property. What this is going to say is that
// "Hey React router, only apply the active class when the route that we are
// on is exactly the same as whatever we specify it to."
// so unless we are at "/", 'Home' is not going to be active. 
 
function Nav () {
  return (
  	<ul className='nav'>
  	  <li>
  	    <NavLink exact activeClassName='active' to='/'>
  	      Home
  	    </NavLink>
  	  </li>
  	  <li>
  	    <NavLink activeClassName='active' to='/battle'>
  	      Battle
  	    </NavLink>
  	  </li>
  	  <li>
  	    <NavLink activeClassName='active' to='/popular'>
  	      Popular
  	    </NavLink>
  	  </li>
  	</ul>
  )
}

module.exports = Nav;