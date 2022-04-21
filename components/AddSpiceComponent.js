import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { SPICES } from '../shared/spiceList';

class AddSpice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			spices: SPICES
		};
	}

	toggleSpice = (spiceId, gotIt) => {
		let s = this.state.spices;
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
	render() {
		return <Directory spices={this.state.spices} toggleSpice={this.toggleSpice} />;
	}
}

export default AddSpice;
