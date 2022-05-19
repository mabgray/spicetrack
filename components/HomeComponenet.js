import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
	render() {
		return (
			<View>
				<Text>SPICE TRACK</Text>
				<Button>My Spice Rack</Button>
			</View>
		);
	}

	static navigationOptions = {
		title: 'Home'
	};
}

export default Home;
