// Movie Details Container
import React from 'react';
import axios from 'axios';

import MovieDetails from '../components/moviedetails';

export default class extends React.Component {
	constructor(props) {
    super(props);
    this.state = {moviedetails: {}};
  }
  componentDidMount() {
    axios
    .get(`${this.props.routes[0].host}:${this.props.routes[0].port}/movie/${this.props.location.state.id}`)
    .then(response => {
      this.setState({moviedetails: response.data});
    });
  }
  render() {
    if (this.state.moviedetails.id) {
      return (
        <MovieDetails details={this.state.moviedetails} host={this.props.routes[0].host} port={this.props.routes[0].port} />
      );
    } else {
      return <div/>;
    }
  }
}