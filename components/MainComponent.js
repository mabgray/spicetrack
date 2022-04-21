import React, { Component } from 'react';
import Home from './AddSpiceComponent';
import Directory from './DirectoryComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AddSpice from './AddSpiceComponent';
import SpiceRack from './SpiceRackComponent';

const SpiceRackNavigator = createStackNavigator(
	{
		Home: { screen: SpiceRack }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#5637DD'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			},
			headerLeft: (
				<Icon
					name="home"
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
				backgroundColor: '#5637DD'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			},
			headerLeft: (
				<Icon
					name="info-circle"
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
		AddSpice: {
			screen: AddSpiceNavigator,
			navigationOptions: {
				drawerLabel: 'Add Spice',
				drawerIcon: ({ tintColor }) => <Icon name="tree" type="font-awesome" size={24} color={tintColor} />
			}
		},
		SpiceRack: {
			screen: SpiceRackNavigator,
			navigationOptions: {
				drawerLabel: 'My Spice Rack',
				drawerIcon: ({ tintColor }) => <Icon name="heart" type="font-awesome" size={24} color={tintColor} />
			}
		}
	},
	{
		drawerBackgroundColor: '#CEC8FF',
		contentComponent: CustomDrawerContentComponent
	}
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
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
		backgroundColor: '#5637DD',
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

export default Main;
