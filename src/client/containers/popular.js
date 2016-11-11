// Popular Movies Container
import React from 'react';
import axios from 'axios';

import Popular from '../components/popular';

export default class extends React.Component {
	constructor(props) {
    super(props);
    this.state = {popularmovies: []};
  }
  componentDidMount() {
    axios
    .get(`${this.props.routes[0].host}:${this.props.routes[0].port}/popular`)
    .then(response => {
      this.setState({popularmovies: response.data.results});
    });
  }
  render() {
    return (
        <Popular movies={this.state.popularmovies} host={this.props.routes[0].host} port={this.props.routes[0].port} />
    );
  }
}