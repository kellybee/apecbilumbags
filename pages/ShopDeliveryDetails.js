'use strict';

import React, {Component} from "react";
import {
	View,
	Image,
	TouchableHighlight,
	StyleSheet,
	TextInput,
	Button,
} from "react-native";
import WeaverData from '../data/Weavers';
import {
           appStyles,
           appNavigationOptions,
       } from '../styles/app';
import {
    ImagePanel,
    TextHeader,
    TextDescription,
    StarRating,
} from '../components';
import * as Progress from 'react-native-progress';

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
        height: 100,
        width: 100,
        margin: 10,
    },
    textView: {
        flex: 1,
    },
    imgView: {
        flex: 1,
    },
    profileRow: {
        borderColor: '#ccc',
    },
    row: {
            flexDirection: 'row',
        },
    textInput: {
        backgroundColor: '#ccc',
        borderColor: '#00cc00',
        margin: 10,
        padding: 5
    }
};

export default class ShopDeliveryDetails extends Component {
    static navigationOptions = {
        ...appNavigationOptions,
        title: 'Order a Bilum Original',
      };

	render() {
	    //TODO: get weaver id from order
        const weaverId = '1';
        const weaver = WeaverData.find(item => item.id === '1');

		return (
			<View style={styles.container}>
			    <TextHeader text='Estimated delivery' />
                <TextInput style={styles.textInput} />
                <TextHeader text='Delivery details' />
                <TextInput style={styles.textInput} />
				<TextHeader text='Pattern and style' />
				<View style={styles.row}>
                    <ImagePanel text='Snake' imgSrc={require('../assets/pattern-snake.png')} small />
                    <ImagePanel text='Karkar' imgSrc={require('../assets/style-karkar.png')} small />
                </View>
				<TextHeader text='Your Weaver' />
                <TextDescription text="Weavers will be contacted to accept your job and are expected to reply within 72 hours"/>
                <View style={styles.row}>
                    <Button
                      title="Back"
                      onPress={() => this.props.navigation.goBack()}
                      style={{flex: 1, backgroundColor: '#ccc'}}
                    />
                    <Button
                      title="Order"
                      onPress={() => this.props.navigation.navigate('ShopConfirm')}
                      style={{flex: 1, alignSelf: 'left'}}
                    />
                </View>
			</View>
		);
	}
}
