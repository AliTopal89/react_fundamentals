// this is going to retain all the api request that we make in 
// our app.
// we want to export an object from this file
// fetchPopularRepos function to fetch all the popular repos in Github 
// with the specific language.
// we are going to get an encoded URI.
// we want all the repos which has more than 1 star and the
// language is going to be whatever language we pass in. 
// and then sort by stars in descending order. 

//now what we are going to do is return invocation of axios.get
//so that axios.get(encodeURI) -> is going to return us a promise
// .items is what we care about which are the list of repositories.

// .then(function (res) is going to be whatever
// response.data.items is. 

var axios = require('axios');

module.exports = {
	fetchPopularRepos: function (language) {
		var encodedURI = window.encodeURI(
			'https://api.github.com/search/repositories?q=stars:>1+language:'+ language + 
			'&sort=stars&order=desc&type=Repositories');

		return axios.get(encodeURI)
		  .then(function (response){
		  	return response.data.items;
		  });
	}
}

// fetchPopularRepos('Java')
//   .then(function (res){

//   })