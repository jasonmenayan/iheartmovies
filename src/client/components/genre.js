import React from 'react';

import TileLayout from './tilelayout';

export default function (props) {
  return (
    <div>
    	<div className="sectiontitle">
    		{props.genreName} Movies
    	</div>
    	<TileLayout movies={props.movies} host={props.host} port={props.port} />
    </div>
  );
}


