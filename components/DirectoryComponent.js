import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { View, Alert } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Directory(props) {
	const renderDirectoryItem = ({ item }) => {
		let icon = <Icon name="circle" type="font-awesome" color="#D3D0CBFF" raised reverse />;

		let itemStyle = styles.item;
		let expired = false;
		if (item.gotIt) {
			icon = <Icon name="check" type="font-awesome" color="#2E5266FF" raised reverse />;
			//  comparing spices date to current date
			itemStyle = Object.assign({}, itemStyle, styles.itemGotIt);
			// overriding itemStyle with styles.itemGotIt
			if ('startDate' in item) {
				let currentTime = new Date().getTime();
				// getting current time from the date object
				currentTime = Number(currentTime);
				// this is where we are checking the date/time
				let itemTime = new Date(item.startDate).getTime();
				// the above is the item time converted to miliseconds but it is a string
				itemTime = Number(itemTime);
				let difference = currentTime - itemTime;

				if (difference / 31536000000 >= 1) {
					// this is a year in miliseconds
					itemStyle = Object.assign({}, itemStyle, styles.expired);
					expired = true;
				}
			}
		}
		let expiredmsg = '';
		if (expired) {
			expiredmsg = 'This item has probably expired. It is over a year old.';
		}
		console.log(item.name);
		console.log(itemStyle);
		return (
			<View style={styles.box}>
				<Text style={itemStyle}>
					<View style={styles.titleView}>
						<ListItem
							title={
								<Text style={styles.spiceText} ellipsizeMode="tail" numberOfLines={1}>
									{item.name}
								</Text>
							}
						/>
					</View>
					{/* <ListItem>
						<ListItem.Content>
							<ListItem.Title>{item.name}</ListItem.Title>
						</ListItem.Content>
					</ListItem> */}
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
						{icon}
					</TouchableOpacity>
					{/* {expiredmsg} */}
				</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				numColumns={3}
				data={props.spices}
				renderItem={renderDirectoryItem}
				keyExtractor={(item) => item.id.toString()}
				key={(item) => item.id}
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
		backgroundColor: '#A05050'
	},
	box: {
		width: '50%'
	},
	spiceText: {
		maxWidth: 100
	},
	titleView: {
		width: '95%'
	}
});

export default Directory;
