// Search Results Container
import React from 'react';
import axios from 'axios';

import SearchResults from '../components/searchresults';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchresults: []};
  }
  componentDidMount() {
    axios
    .get(`${this.props.routes[0].host}:${this.props.routes[0].port}/search?query=${this.props.location.state.query}`)
    .then(response => {
      this.setState({searchresults: response.data.results});
    });
  }
  render() {
    if (this.state.searchresults) {
      return (
        <SearchResults movies={this.state.searchresults} host={this.props.routes[0].host} port={this.props.routes[0].port} />
      ); 
    } else {
      return <div/>;
    }
  }
}