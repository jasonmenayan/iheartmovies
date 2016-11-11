import React from 'react';

import TileLayout from './tilelayout';

export default function (props) {
  return (
    <div>
    	<div className="sectiontitle">
    		Popular Movies
    	</div>
    	<TileLayout movies={props.movies} host={props.host} port={props.port} />
    </div>
  );
}


