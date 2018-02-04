// componentDidMount - life cycle event.
// componentDidMount is going to be invoked by React. This
// is where you are going to be making any AJAX requests,
// with our api object which we required. 


// api.fetchPopularRepos(lang) = because that is the new language
// that has been selected

// this.updateLanguage(this.state.selectedLanguage); - is going to 
// be 'All' as thats what we specified. 

// .bind(this) is going to be same as "this" keyword as this.setState
// in api.fetchPopularRepos.

// in our UI to see the result of the repos we can pass in
// {JSON.stringfy(this.state.repos, 2, null)} - to dumb in all our JSX.

// function RepoGrid (props) - we are going to map over all our repos.

// index + 1 cause index is going to start at 0.

// repo.stargazers_count - how many stars the repo has. 

// we are rendering <RepoGrid repos={this.state.repos}
// even before we hit the github api which will cause an error.

// if !this.state.repos - this.state.repos is falsey
// show loading and if it is not falsey 
// render our <RepoGrid repos={this.state.repos} - show our RepoGrid.


var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

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

function RepoGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map(function (repo, index) {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    api.fetchPopularRepos(lang)
      .then(function (repos) {
        this.setState(function () {
          return {
            repos: repos
          }
        });
      }.bind(this));
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {!this.state.repos
          ? <p>LOADING!</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

module.exports = Popular;