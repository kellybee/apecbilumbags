'use strict';

import React, {Component} from "react";
import {
    Button,
	TextInput,
	Text,
	View,
	Image,
} from "react-native";
import appStyles from '../styles/app';
import BilumStyles from '../data/BilumStyles';
import {
    ImagePanel,
    TextHeader,
    TextDescription,
    TouchPanel,
} from '../components';

const styles = {
    ...appStyles,
};

export default class Shop extends Component {
static navigationOptions = {
    title: 'Shop for Bilum Originals',
  };
	render() {
		return (
			<View style={styles.container}>
				<TextHeader text='Select a style' />
				<View style={styles.quarterHeight}>
                    {BilumStyles.map((item) => {
                        return (<View style={styles.row} key={item.id}>
                            <TouchPanel key={item.id}
                                navigateTo='ShopPattern'
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
