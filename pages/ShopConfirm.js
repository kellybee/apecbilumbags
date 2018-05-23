'use strict';

import React, {Component} from "react";
import {
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
        }
};


export default class ShopConfirm extends Component {
    static navigationOptions = {
        title: 'Order Status',
      };

	render() {
	    //TODO: get weaver id from order
        const weaverId = '1';
        const weaver = WeaverData.find(item => item.id === '1');

		return (
			<View style={styles.container}>
			    <TextHeader text='Status' />
                <TextDescription text="Task sent to weavers" />
                <Progress.Bar progress={0.2} width={200} style={{marginBottom: 10}}/>
                <TextHeader text='Estimated delivery' />
                <TextDescription text='29th June 2018' />
                <TextHeader text='Delivery details' />
                <TextDescription text='Hotel Grand Papua' />
				<TextHeader text='Pattern and style' />
				<View style={styles.row}>
                    <ImagePanel text='Snake' imgSrc={require('../assets/pattern-snake.png')} small />
                    <ImagePanel text='Karkar' imgSrc={require('../assets/style-karkar.png')} small />
                </View>
				<TextHeader text='Your Weaver' />
				<TextDescription text="Weavers have been contacted and will accept your job within 72 hours"/>
			</View>
		);
	}
}
