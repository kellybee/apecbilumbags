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
import appStyles from '../styles/app';
import {
    ImagePanel,
    TextHeader,
    TextDescription,
    StarRating,
} from '../components';

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
        margin: 10,
        marginBottom: 30
    }
};


export default class Weavers extends Component {
    static navigationOptions = {
        title: 'Weavers',
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
                                <StarRating text="High value weaver" ratingValue={4.0} />
                                <Text style={styles.textDescription}>{item.shortDescription}</Text>
                            </View>
				        </TouchableHighlight>
				    )
				}
				)}
			</View>
		);
	}
}
