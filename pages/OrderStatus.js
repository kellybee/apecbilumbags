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
        }
};


export default class OrderStatus extends Component {
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
                <TextDescription text="In progress with weaver" />
                <Progress.Bar progress={0.6} width={200} style={{marginBottom: 10}} />
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
				<TouchableHighlight key={weaver.id}
                          onPress={() => this.props.navigation.navigate({routeName: 'WeaverProfile', params: { id: weaver.id } })}>
                          <View style={styles.row}>
                            <View>
                                <Image source={weaver.imgSrc} style={styles.profileImg} />
                            </View>
                            <View>
                                <TextDescription text={weaver.name} />
                                <StarRating text="High value weaver" ratingValue={4.0} />
                                <TextDescription text={weaver.shortDescription} />
                            </View>
                            <View style={{backgroundColor: '#ccc'}}>
                                <TextDescription text='>' />
                            </View>
                          </View>
                </TouchableHighlight>
			</View>
		);
	}
}
