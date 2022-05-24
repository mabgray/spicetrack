import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		console.log(navigate);
		return (
			<View>
				<Text>SPICE TRACK</Text>
				<Button
					title="my spice rack"
					onPress={() => {
						navigate('SpiceRack');
					}}
				/>
			</View>
		);
	}

	static navigationOptions = {
		title: 'Home'
	};
}

export default Home;
