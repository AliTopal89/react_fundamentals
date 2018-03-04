var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');

// the way you set your UI for a specific component 
//is with your render method

// our main entry point to our application

// the reason we use className instead of class is that 
// class is already a reserved keyword in JS, because it 
// already means something else. 

// Now popular component will be rendered when we go to
// "/popular" <Route path='/popular' component={Popular} />

// what "Switch" is going to do is instead of rendering all the
// routes that are active, switch is going to render one specific
// route, now is somebody goes to a path that isn't from the path's
// described React router is going to render "Not Found" 

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

// when you refresh, the browser is making a request to your server
// in order to get the assets in "/popular"..
// inside of the webpack.config file 
// add a "publicPath: '/' " property - this sets the base porperty 
// for all of our assets
// and add a new "devServer" property on the apps exports object
// with "historyApiFallback: true" - what this does is that 
// whenever the app sees a url like "/popular" instead of requesting
// the assets  from "/popular" - it will redirect to localhost and the react
// router will load the route for "/popular".

