import React from 'react';
import {
    StyleSheet,
    View
    } from 'react-native';
import TouchPanel from '../components/TouchPanel';

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
    title: 'BILUM ORIGINALS',
    headerStyle: {
       backgroundColor: '#aaa',
    },
    headerTintColor: '#000',
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
            imgSrc={require('../assets/bilum-3.jpeg')}
            text="Shop"/>
	</View>
    );
  }
}

export default HomeScreen;