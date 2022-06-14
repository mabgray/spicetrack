import React, { Component } from 'react';
import SpiceRackDirectory from './SpicerackDirectoryComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		spices: state.spices
	};
};
const mapDispatchToProps = {
	addSpice: (spiceId, gotIt) => addSpice(spiceId, gotIt)
};

class SpiceRack extends Component {
	toggleSpice = (spiceId, gotIt) => {
		this.props.addSpice(spiceId, gotIt);
	};
	static navigationOptions = {
		title: 'My Spice Rack'
	};
	render() {
		// console.log(this.state);
		return <SpiceRackDirectory spices={this.props.spices} toggleSpice={this.toggleSpice} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SpiceRack);
