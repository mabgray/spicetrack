import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AddSpice from './AddSpiceComponent';
import SpiceRack from './SpiceRackComponent';
import Home from './HomeComponenet';
import { addSpices } from '../redux/ActionCreator';
import { connect } from 'react-redux';

const mapDispatchToProps = {
	addSpices
};

const SpiceRackNavigator = createStackNavigator(
	{
		Home: { screen: SpiceRack }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: 'goldenrod'
			},
			headerTintColor: 'eggnog',
			headerTitleStyle: {
				color: '#fff'
			},
			headerLeft: (
				<Icon
					name="user-circle-o"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const AddSpiceNavigator = createStackNavigator(
	{
		About: { screen: AddSpice }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: 'goldenrod'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			},
			headerLeft: (
				<Icon
					name="plus-square"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);

const HomeNavigator = createStackNavigator(
	{
		Home: { screen: Home }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: 'goldenrod'
			},
			headerTintColor: 'eggnog',
			headerTitleStyle: {
				color: '#fff'
			},
			headerLeft: (
				<Icon
					name="user-circle-o"
					type="font-awesome"
					iconStyle={styles.stackIcon}
					onPress={() => navigation.toggleDrawer()}
				/>
			)
		})
	}
);
const CustomDrawerContentComponent = (props) => (
	<ScrollView>
		<SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
			<View style={styles.drawerHeader}>
				<View style={{ flex: 2 }}>
					<Text style={styles.drawerHeaderText}>Spice Track</Text>
				</View>
			</View>
			<DrawerItems {...props} />
		</SafeAreaView>
	</ScrollView>
);

const MainNavigator = createDrawerNavigator(
	{
		Home: {
			screen: HomeNavigator,
			navigationOptions: {
				drawerLabel: 'Home',
				drawerIcon: ({ tintColor }) => (
					<Icon name="plus-square" type="font-awesome" size={24} color={tintColor} />
				)
			}
		},

		AddSpice: {
			screen: AddSpiceNavigator,
			navigationOptions: {
				drawerLabel: 'Add Spice',
				drawerIcon: ({ tintColor }) => (
					<Icon name="plus-square" type="font-awesome" size={24} color={tintColor} />
				)
			}
		},
		SpiceRack: {
			screen: SpiceRackNavigator,
			navigationOptions: {
				drawerLabel: 'My Spice Rack',
				drawerIcon: ({ tintColor }) => <Icon name="user-o" type="font-awesome" size={24} color={tintColor} />
			}
		}
	},
	{
		drawerBackgroundColor: 'goldenrod',
		contentComponent: CustomDrawerContentComponent
	}
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
	componentDidMount() {
		this.props.addSpices();
	}
	render() {
		return (
			<View
				style={{
					flex: 1,
					paddingTop: 0
				}}
			>
				<AppNavigator />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	drawerHeader: {
		backgroundColor: '#C8A951',
		height: 140,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	drawerHeaderText: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold'
	},
	drawerImage: {
		margin: 10,
		height: 60,
		width: 60
	},
	stackIcon: {
		marginLeft: 10,
		color: '#fff',
		fontSize: 24
	}
});

export default connect(null, mapDispatchToProps)(Main);
