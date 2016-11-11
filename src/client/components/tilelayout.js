import React from 'react';

import MovieTile from './movietile';

export default function (props) {
  let movieArray = [];
  props.movies.forEach(movie => {
    movieArray.push(<MovieTile key={movie.id} className="movietile" moviedata={movie} host={props.host} port={props.port} />);
  });
  return (
    <div className="tilelayout">
      {movieArray}
    </div>
  );
}