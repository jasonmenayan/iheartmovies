import React from 'react';
import {Link} from 'react-router';

export default function (props) {
	return (
		<div>
	    <div className="header">
	    	<Link to="/">i<span className="redlogo">&#x2764;</span>movies</Link>
	    </div>
	    <div className="searchform">
		    <div className="inputwrapper">
	    		<input className="searchinput" type="text" placeholder="movie title" onChange={props.onQueryEntry} />
	    	</div>
	    	<div className="submitwrapper">
		      <Link className="searchsubmit" to={{pathname: '/searchresults', state: {query: props.query}}}>Search</Link>
		    </div>
  		</div>
  	</div>
  );
}


