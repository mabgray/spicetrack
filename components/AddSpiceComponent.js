import React, { Component } from 'react';
import { connect } from 'react-redux';
import Directory from './DirectoryComponent';
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
	toggleSpice = (spiceId, gotIt) => {
		this.props.addSpice(spiceId, gotIt);
	};
	static navigationOptions = {
		title: 'Add A Spice'
	};
	render() {
		// directory handles the click
		return <Directory spices={this.props.spices} toggleSpice={this.toggleSpice} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSpice);
