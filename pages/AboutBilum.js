'use strict';

import React, {Component} from "react";
import {
    Button,
	TextInput,
	Text,
	View,
	Image,
} from "react-native";
import {
    ImagePanel,
    TextDescription,
     } from '../components';
import appStyles from '../styles/app';

const styles = {
    ...appStyles,
    textItalic: {
        fontStyle: 'italic',
        textAlign: 'center',
    }
};

export default class AboutBilum extends Component {
    static navigationOptions = {
        title: 'About Bilum',
    };
	render() {
		return (
		    <View style={styles.container}>
                <View style={styles.row}>
                    <ImagePanel imgSrc={require('../assets/bilum-5.jpg')} />
                </View>
                <View style={styles.row}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        padding: 5,
                        fontStyle: 'italic',
                        textAlign: 'center',
                        textAlignVertical: 'center'
                    }}>The beautiful woven bags empowering women and their families in PNG.</Text>
                </View>
                <View style={styles.row}>
                    <TextDescription text='The bilum, almost exclusively made by women, is a beautiful and unique traditional hand-woven bag. Each multi-purpose bilum has both cultural significance and serves functional needs for the women of Papua New Guinea. The making of these bags is handed down via oral traditions stretching back over 20,000 years.' />
                </View>
            </View>
		);
	}
}
