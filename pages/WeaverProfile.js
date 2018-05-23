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
import {
    ImagePanel,
    TextHeader,
    TextDescription,
    StarRating,
} from '../components';

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
	    //TODO: get weaver id from order
        const weaverId = '1';
        const weaver = WeaverData.find(item => item.id === '1');

		return (
			<View style={styles.container}>
				<View>
                <Image source={weaver.imgSrc} style={styles.profileImg} />
                </View>
                <View>
                <TextDescription text={weaver.name} />
                <StarRating text="High value weaver" ratingValue={4.0} />
                </View>
                <View>
                <TextDescription text={weaver.description} />
                </View>
			</View>
		);
	}
}
