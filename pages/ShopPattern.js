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
           appStyles,
           appNavigationOptions,
       } from '../styles/app';
import BilumPatterns from '../data/BilumPatterns';
import {
    ImagePanel,
    TextHeader,
    TextDescription,
    TouchPanel,
} from '../components';

const styles = {
    ...appStyles,
};

export default class ShopPattern extends Component {
static navigationOptions = { ...appNavigationOptions,
    title: 'Order a Bilum Original',
  };
	render() {
		return (
			<View style={styles.container}>
				<TextHeader text='Select a style' />
				<View style={styles.quarterHeight}>
                    {BilumPatterns.map((item) => {
                        return (<View style={styles.row} key={item.id}>
                            <TouchPanel key={item.id}
                                navigateTo='ShopDeliveryDetails'
                                navigation={this.props.navigation}
                                imgSrc={item.imgSrc}
                                text={item.title}/>
                                <View style={styles.halfHeight}>
                                <TextHeader text={item.description} />
                                </View>
                                </View>
                        )
                    }
                    )}
                </View>
			</View>
		);
	}
}