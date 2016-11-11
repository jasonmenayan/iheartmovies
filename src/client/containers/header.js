// Header Container
import React from 'react';
import Header from '../components/header';

export default class extends React.Component {
	constructor(props) {
    super(props);
    this.state = {searchquery: ''};
    this.handleQueryEntry = this.handleQueryEntry.bind(this);
  }
  handleQueryEntry(e) {
  	e.preventDefault();
  	this.setState({searchquery: e.target.value});
  }
  render() {
    return (
    	<div>
    		<Header query={this.state.searchquery} onQueryEntry={this.handleQueryEntry} />
        {this.props.children}
      </div>
    );
  }
}