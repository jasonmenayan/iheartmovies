import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import HeaderContainer from './containers/header';
import PopularContainer from './containers/popular';
import SearchResultsContainer from './containers/searchresults';
import MovieDetailsContainer from './containers/moviedetails';
import GenreContainer from './containers/genre';

// scheme, host and port to access API
const apiHost = 'http://localhost';
const apiPort = 8080;

render((
	<Router history={browserHistory}>
    <Route path="/" host={apiHost} port={apiPort} component={HeaderContainer}>
    	<IndexRoute component={PopularContainer} />
    	<Route path="/searchresults" host={apiHost} port={apiPort} component={SearchResultsContainer} />
    	<Route path="/moviedetails" host={apiHost} port={apiPort} component={MovieDetailsContainer} />
    	<Route path="/genre" host={apiHost} port={apiPort} component={GenreContainer} />
    </Route>
  </Router>
  ), document.getElementById('app')
);


