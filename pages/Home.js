import React from 'react';
import {
    StyleSheet,
    View
    } from 'react-native';
import TouchPanel from '../components/TouchPanel';
import appStyles from '../styles/app';

const styles = appStyles;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Bilum Originals',
  };
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.quarterHeight}>
            <View style={styles.row}>
                <TouchPanel
                    navigateTo='Weavers'
                    navigation={this.props.navigation}
                    imgSrc={require('../assets/weaver.png')}
                    text="Our weavers"/>
                <TouchPanel
                    navigateTo='AboutBilum'
                    navigation={this.props.navigation}
                    imgSrc={require('../assets/bilum-2.jpeg')}
                    text="About Bilum"/>
	        </View>
	    </View>
        <TouchPanel
            navigateTo='Shop'
            navigation={this.props.navigation}
            imgSrc={require('../assets/bilum-4.jpg')}
            text="Shop for Bilum Originals"/>
	</View>
    );
  }
}

export default HomeScreen;