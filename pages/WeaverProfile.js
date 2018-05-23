'use strict';

import React, {Component} from "react";
import {
    Button,
	TextInput,
	Text,
	View,
	Image,
} from "react-native";

export default class WeaverProfile extends Component {

	render() {
		return (
			<View>
				<Text>Weaver Profile. TODO: weaver profile details from data. Link to products. Show ratings & reviews</Text>
				<Button
                                  title="Back"
                                  onPress={() => this.props.navigation.goBack()}
                                />
			</View>
		);
	}
}
