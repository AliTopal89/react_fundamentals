var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');

class App extends React.Component {
  render() {
  	return (
  		// what popular is rendering is the div that we created
  		// in Popular.js
  	   <Router>
	  	  <div className='container'>
	  	    <Nav />
	  	    <Switch>
		  	  <Route exact path='/' component={Home} />
		  	  <Route path='/battle' component={Battle} />
		  	  <Route path='/popular' component={Popular} />
		  	  <Route render={function(){
		  	  	return <p>Not Found</p>
		  	  }} />
	  	    </Switch>
	  	  </div>
	   </Router>

  	)
  }
}
// now that we are requiring App.js in our index.js file
// we need to make sure we export it

module.exports = App;

