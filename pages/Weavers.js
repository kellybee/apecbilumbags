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
				<Text>Weavers</Text>
				<Button
                                  title="Back"
                                  onPress={() => this.props.navigation.goBack()}
                                />
			</View>
		);
	}
}
