import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { View, Alert } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Directory(props) {
	const renderDirectoryItem = ({ item }) => {
		let icon = <Icon name="heart" type="font-awesome" color="#f50" raised reverse />;
		let itemStyle = styles.item;
		if (item.gotIt) {
			icon = <Icon name="heart" type="font-awesome" color="#000090" raised reverse />;
			itemStyle = Object.assign({}, itemStyle, styles.itemGotIt);
		}
		return (
			<View>
				<TouchableOpacity
					onPress={() =>
						Alert.alert(
							item.name,
							'Do you want to add the spice ' + item.name + '?',
							[
								{
									text: 'no',
									onPress: () => props.toggleSpice(item.id, false),
									style: 'cancel'
								},
								{
									text: 'yes',
									onPress: () => {
										props.toggleSpice(item.id, true);
									}
								}
							],
							{ cancelable: false }
						)}
				>
					<Text style={itemStyle}>
						<ListItem title={item.name} />
						{icon}
					</Text>
				</TouchableOpacity>
			</View>
		);
	};
	console.log(props);
	return (
		<View style={styles.container}>
			<FlatList
				data={props.spices}
				renderItem={renderDirectoryItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}

/* const styles = StyleSheet.create({
	deleteView: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex: 1
	},
	deleteTouchable: {
		backgroundColor: 'red',/*  
		height: '100%',
		justifyContent: 'center'
	},
	deleteText: {
		color: 'white',
		fontWeight: '700',
		textAlign: 'center',
		fontSize: 16,
		width: 100
	}
}); */

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30,
		padding: 2
	},
	item: {
		backgroundColor: 'grey',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		fontSize: 25
	},
	itemGotIt: {
		backgroundColor: 'green'
	}
});

export default Directory;
