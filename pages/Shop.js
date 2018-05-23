'use strict';

import React, {Component} from "react";
import {
    Button,
	TextInput,
	Text,
	View,
	Image,
} from "react-native";

export default class Shop extends Component {

	render() {
		return (
			<View>
				<Text>Shop TODO: filter for existing products. Links to custom bilim. Suggested items.</Text>
				<Button
                                  title="Back"
                                  onPress={() => this.props.navigation.goBack()}
                                />
                <Text>TODO: Bilum results</Text>
			</View>
		);
	}
}
