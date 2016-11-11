import React from 'react';
import moment from 'moment';
import {Link} from 'react-router';

export default function (props) {
  let poster = (props.details.poster_path) ? <img src={`http://image.tmdb.org/t/p/w342/${props.details.poster_path}`} width="342"/> : <img src={`${props.host}:${props.port}/images/noimage-342.png`} width="342"/>;
	let altTitle = (props.details.title == props.details.original_title) ? <div/> : <div className="alttitle">{props.details.original_title}</div>;
  let homepage = (props.details.homepage) ? <a href={props.details.homepage}>Website</a> : <div/>;
  let releaseDate = moment(props.details.release_date).format("MMM Do YYYY");
  let genres = props.details.genres.map(genre => {
    return (
      <li key={genre.id}>
        <Link to={{pathname: '/genre', state: {id: genre.id, name: genre.name}}}>{genre.name}</Link>
      </li>
    );
  });
  return (
    <div className="moviedetails">
      <div className="poster">
        {poster}
      </div>
      <div className="details">
        <div className="title">
          {props.details.title}
        </div>
      	{altTitle}
        <div className="tagline">
          {props.details.tagline}
        </div>
        <div className="overview">
          {props.details.overview}
        </div>
        <div className="genres">
          <span className="entrytype">Genres:</span>
          <ul>
            {genres}
          </ul>
        </div>
        <div className="releasedate">
          <span className="entrytype">Release date:</span> {releaseDate}
        </div>
        <div className="runtime">
          <span className="entrytype">Runtime:</span> {props.details.runtime} minutes
        </div>
        <div className="revenue">
          <span className="entrytype">Box office earnings:</span> ${props.details.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="rating">
          <span className="entrytype">User rating:</span> {props.details.vote_average} across {props.details.vote_count} ratings
        </div>
        <div className="links">
          {homepage}
        </div>
      </div>
    </div>
  );
}


