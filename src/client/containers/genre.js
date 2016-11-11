// Movies by Genre Container
import React from 'react';
import axios from 'axios';

import Genre from '../components/genre';

export default class extends React.Component {
	constructor(props) {
    super(props);
    this.state = {moviesingenre: []};
  }
  componentDidMount() {
    axios
    .get(`${this.props.routes[0].host}:${this.props.routes[0].port}/genre/${this.props.location.state.id}`)
    .then(response => {
      this.setState({moviesingenre: response.data.results});
    });
  }
  render() {
    if (this.state.moviesingenre) {
      return (
        <Genre movies={this.state.moviesingenre} genreName={this.props.location.state.name} host={this.props.routes[0].host} port={this.props.routes[0].port} />
      );
    } else {
      return <div/>;
    }
  }
}