import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
	render() {
		const { navigate } = this.props.navigation;
		console.log(navigate);
		return (
			<View style={styles.container}>
				<Text style={styles.textTitle}>SPICE TRACK</Text>
				<Pressable
					style={styles.button}
					onPress={() => {
						navigate('SpiceRack');
					}}
				>
					<Text style={styles.text}>My Spice Rack</Text>
				</Pressable>
			</View>
		);
	}

	static navigationOptions = {
		title: 'Home'
	};
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 10,
		elevation: 3,
		backgroundColor: 'black',
		width: 200
	},
	container: {
		flex: 1,

		padding: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white'
	},
	textTitle: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25
	}
});
export default Home;
