import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { View, Alert } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

function SpiceRackDirectory(props) {
	const renderDirectoryItem = ({ item }) => {
		let icon = <Icon name="x" type="font-awesome" color="#D3D0CBFF" raised reverse />;
		console.log(item);
		console.log('hi');
		let itemStyle = styles.item;
		let expired = false;
		if (item.gotIt) {
			icon = <Icon name="check" type="font-awesome" color="#2E5266FF" raised reverse />;
			//  comparing spices date to current date
			itemStyle = Object.assign({}, itemStyle, styles.itemGotIt);
			if ('startDate' in item) {
				let currentTime = new Date().getTime();
				currentTime = Number(currentTime);
				let itemTime = new Date(item.startDate).getTime();
				itemTime = Number(itemTime);
				let difference = currentTime - itemTime;

				if (difference / 31536000000 >= 1) {
					itemStyle = Object.assign({}, itemStyle, styles.expired);
					expired = true;
				}
			}
			let expiredmsg = '';
			if (expired) {
				expiredmsg = 'This item has probably expired. It is over a year old.';
			}
			return (
				<View>
					<Text style={itemStyle}>
						<ListItem title={item.name} />
						<TouchableOpacity
							onPress={() =>
								Alert.alert(
									item.name,
									'Do you have this spice? ' + item.name + '?',
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
							{icon}
						</TouchableOpacity>
						{expiredmsg}
					</Text>
				</View>
			);
		}
	};

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
		backgroundColor: '#52662e'
	},
	expired: {
		backgroundColor: 'tomato'
	}
});

export default SpiceRackDirectory;
