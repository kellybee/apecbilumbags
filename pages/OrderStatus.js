'use strict';

import React, {Component} from "react";
import {
    Button,
	TextInput,
	Text,
	View,
	Image,
	TouchableHighlight,
	StyleSheet,
	ImageBackground,
} from "react-native";
import WeaverData from '../data/Weavers';
import {
           appStyles,
           appNavigationOptions,
       } from '../styles/app';

const styles = {
    ...appStyles,
    imageBackground: {
            flex: 1,
            width: null,
            height: null,
            margin: 5,
        },
        panelText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 26,
            margin: 10,
            padding: 5,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignSelf: 'center',
            justifyContent: 'center',
        },
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


export default class OrderStatus extends Component {
    static navigationOptions = {
        ...appNavigationOptions,
        title: 'ORDER STATUS',
      };

	render() {
	    //TODO: get weaver id from order
        const weaverId = '1';
        const weaver = WeaverData.find(item => item.id === '1');

		return (
			<View style={styles.container}>
				<Text>TODO: Order status</Text>
				<ImageBackground
                      style={styles.imageBackground}
                      source={require('../assets/pattern-snake.png')} >
                      <Text
                          style={styles.panelText} >
                          Snake
                      </Text>
                </ImageBackground>
                <ImageBackground
                      style={styles.imageBackground}
                      source={require('../assets/style-karkar.png')} >
                      <Text
                          style={styles.panelText} >
                          Karkar
                      </Text>
                </ImageBackground>
				<Text>Bilum details</Text>
				<Text>Estimated delivery</Text>
				<Text>Delivery details</Text>
				<Text>Order status</Text>
				<Text>Your Weaver</Text>
				<TouchableHighlight key={weaver.id}
                          onPress={() => this.props.navigation.navigate({routeName: 'WeaverProfile', params: { id: weaver.id } })}>
                    <View style={styles.profileRow}>
                        <Image source={weaver.imgSrc} style={styles.profileImg} />
                        <Text style={styles.textName}>{weaver.name}</Text>
                        <Text style={styles.textDescription}>{weaver.description}</Text>
                    </View>
                </TouchableHighlight>
			</View>
		);
	}
}
