import React, { Component } from 'react';
import { connect } from 'react-redux';
import Directory from './DirectoryComponent';
import { SPICES } from '../shared/spiceList';
import { addSpice } from '../redux/ActionCreator';

const mapStateToProps = (state) => {
	return {
		spices: state.spices
	};
};

const mapDispatchToProps = {
	addSpice: (spiceId, gotIt) => addSpice(spiceId, gotIt)
};

class AddSpice extends Component {
	/* constructor(props) {
		super(props);
		this.state = {
			spices: SPICES
		};
	} */

	/* toggleSpice = (spiceId, gotIt) => {
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
	}; */
	toggleSpice = (spiceId, gotIt) => {
		this.props.addSpice(spiceId, gotIt);
	};
	render() {
		return <Directory spices={this.props.spices} toggleSpice={this.toggleSpice} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSpice);
