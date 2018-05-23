'use strict';

import React, {Component} from "react";
import {
    Button,
	TextInput,
	Text,
	View,
	Image,
	TouchableHighlight,
} from "react-native";
import WeaverData from '../data/Weavers';

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000'
    },
    quarterHeight: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    textName: {
        fontSize: 24,
    },
    textDescription: {
        fontSize: 16,
    }
};


export default class Weavers extends Component {
    static navigationOptions = {
        title: 'WEAVERS',
        headerStyle: {
           backgroundColor: '#aaa',
        },
        headerTintColor: '#000',
      };

	render() {
		return (
			<View>
				<Text>Weavers. TODO: list weavers and link to profiles</Text>
				{WeaverData.map((item) => {
				    return (
				        <View key={item.id}>
                            <Text style={styles.textName}>{item.name}</Text>
                            <Text style={styles.textDescription}>{item.description}</Text>
                            <Button
                              title="WeaverProfile"
                              onPress={() => this.props.navigation.navigate('WeaverProfile')}
                            />
				        </View>
				    )
				}
				)}
			</View>
		);
	}
}
