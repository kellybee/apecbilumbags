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
import WeaverData from '../data/Weavers';

const styles = appStyles;

export default class WeaverProfile extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        const profile = WeaverData.find(item => item.id === params.id);

        return {
          ...appNavigationOptions,
          title: profile.name,
        }
      };

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
