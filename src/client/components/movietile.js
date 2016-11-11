import React from 'react';
import {Link} from 'react-router';

export default function (props) {
	let poster = (props.moviedata.poster_path) ? <img src={`http://image.tmdb.org/t/p/w185/${props.moviedata.poster_path}`} width="185"/> : <img src={`${props.host}:${props.port}/images/noimage-185.png`} width="185"/>
	let altTitle = (props.moviedata.title == props.moviedata.original_title) ? <div/> : <div className="alttitle">{props.moviedata.original_title}</div>;
  return (
    <div className="movietile" key={props.moviedata.id}>
    	<Link to={{pathname: '/moviedetails', state: {id: props.moviedata.id}}}>
    		<div className="poster">
    			{poster}
    		</div>
	    	<div className="titles">
	    		<div className="title">
	    			{props.moviedata.title}
	    		</div>
	    		{altTitle}
	    	</div>
	    </Link>
    </div>
  );
}