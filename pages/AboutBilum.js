'use strict';

import React, {Component} from "react";
import {
    Button,
	TextInput,
	Text,
	View,
	Image,
} from "react-native";

export default class History extends Component {

	render() {
		return (
			<View>
				<Text>About Bilum. TODO: history, style and patterns</Text>
				<Button
                                                  title="view order status page"
                                                  onPress={() => this.props.navigation.navigate('OrderStatus')}
                                                />
                <Button
                                                  title="view order feedback page"
                                                  onPress={() => this.props.navigation.navigate('OrderFeedback')}
                                                />
				<Button
                                  title="Back"
                                  onPress={() => this.props.navigation.goBack()}
                                />
			</View>
		);
	}
}
