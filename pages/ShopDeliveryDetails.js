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
import appStyles from '../styles/app';
import {
    ImagePanel,
    TextHeader,
    TextDescription,
    StarRating,
} from '../components';
import * as Progress from 'react-native-progress';
import DatePicker from 'react-native-datepicker'

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
        title: 'Shop for Bilum Originals',
      };

    constructor(props){
        super(props)
        this.state = {date:"01-05-2018"}
      }

	render() {
	    //TODO: get weaver id from order
        const weaverId = '1';
        const weaver = WeaverData.find(item => item.id === '1');

		return (
			<View style={styles.container}>
			    <TextDescription text='Delivery details' />
			    <TextHeader text='Estimated delivery (4-6 weeks are required for a custom Bilum)' />
                <DatePicker
                        style={{width: 200, backgroundColor: '#ccc', margin: 10 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-05-2018"
                        maxDate="01-05-2025"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginLeft: 36
                          },
                          backgroundColor: '#ccc',
                          margin: 10,
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                      />
                <TextHeader text='Delivery details' />
                <TextInput style={styles.textInput} />
				<TextHeader text='Pattern and style' />
				<View style={styles.row}>
                    <ImagePanel text='Snake' imgSrc={require('../assets/pattern-snake.png')} small />
                    <ImagePanel text='Karkar' imgSrc={require('../assets/style-karkar.png')} small />
                </View>
				<TextHeader text='Your Weaver' />
                <TextDescription text="Weavers will be contacted to accept your job and are expected to reply within 72 hours"/>
                <View style={{...styles.row, alignSelf: 'center'}}>
                    <Button
                      title="Order"
                      onPress={() => this.props.navigation.navigate('ShopConfirm')}
                      style={{flex: 1}}
                    />
                </View>
			</View>
		);
	}
}
