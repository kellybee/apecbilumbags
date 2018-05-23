'use strict';

import React, {Component} from "react";
import {
	TextInput,
	Text,
	View,
	Image,
	TouchableHighlight,
	StyleSheet,
} from "react-native";
import WeaverData from '../data/Weavers';
import {
           appStyles,
           appNavigationOptions,
       } from '../styles/app';

const styles = {
    ...appStyles,
    textName: {
        fontSize: 24,
        color: '#fff',
    },
    textDescription: {
        fontSize: 16,
        color: '#fff',
    },
    profileImg: {
        height: 50,
        width: 50,
    },
    textView: {
        flex: 1,
    },
    imgView: {
        flex: 1,
    },
    profileRow: {
        borderColor: '#ccc',
    }
};


export default class Weavers extends Component {
    static navigationOptions = {
        ...appNavigationOptions,
        title: 'WEAVERS',
      };

	render() {
		return (
			<View style={styles.container}>
				<Text>Our weavers are local women, expert in creating traditional bilum bags.</Text>
				{WeaverData.map((item) => {
				    return (
				        <TouchableHighlight key={item.id}
                                  onPress={() => this.props.navigation.navigate({routeName: 'WeaverProfile', params: { id: item.id } })}>
                            <View style={styles.profileRow}>
                                <Image source={item.imgSrc} style={styles.profileImg} />
                                <Text style={styles.textName}>{item.name}</Text>
                                <Text style={styles.textDescription}>{item.description}</Text>
                            </View>
				        </TouchableHighlight>
				    )
				}
				)}
			</View>
		);
	}
}
