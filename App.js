import React from 'react';
import {
    StyleSheet,
    View
    } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Shop, History, Weavers } from './pages/index';
import TouchPanel from './components/TouchPanel';

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000'
    },
    quarterHeight: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
};

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Bilum originals',
  };
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.quarterHeight}>
            <View style={styles.row}>
                <TouchPanel
                    navigateTo='Weavers'
                    navigation={this.props.navigation}
                    imgSrc={require('./assets/weaver.png')}
                    text="Our weavers"/>
                <TouchPanel
                    navigateTo='Shop'
                    navigation={this.props.navigation}
                    imgSrc={require('./assets/bilum-2.jpeg')}
                    text="Shop"/>
	        </View>
	    </View>
        <TouchPanel
            navigateTo='Shop'
            navigation={this.props.navigation}
            imgSrc={require('./assets/bilum-3.jpeg')}
            text="Create your unique piece of PNG"/>
	</View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Shop: Shop,
    History: History,
    Weavers: Weavers,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}