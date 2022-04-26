import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { SPICES } from '../shared/spiceList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		spices: state.spices
	};
};

class SpiceRack extends Component {
	toggleSpice = (spiceId, gotIt) => {
		let s = this.props.spices;
		for (let i = 0; i < s.length; i++) {
			if (s[i].id === spiceId) {
				s[i].gotIt = gotIt;
				let startDate = new Date().toString();
				s[i].startDate = startDate;
			}
		}

		this.setState({
			spices: s
		});
		console.log(this.state.spices);
	};
	static navigationOptions = {
		title: 'My Spice Rack'
	};
	render() {
		console.log(this.state);
		return <Directory spices={this.props.spices} toggleSpice={this.toggleSpice} />;
	}
}

export default connect(mapStateToProps)(SpiceRack);
