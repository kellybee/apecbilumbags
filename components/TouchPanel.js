import React, { Component } from 'react';
import {
    Button,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
    } from 'react-native';

const styles = {
    halfHeight: {
        flex: 2,
    },
    imageBackground: {
        flex: 1,
        width: null,
        height: null,
        margin: 5
    },
    panelText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        margin: 10,
    }
};

export default class TouchPanel extends Component {
  render() {
    const { navigateTo, navigation, imgSrc, text } = this.props;
    return (
      <TouchableHighlight style={styles.halfHeight}
          onPress={() => navigation.navigate(navigateTo)}>
          <View style={styles.halfHeight}>
              <ImageBackground
                  style={styles.imageBackground}
                  source={imgSrc} >
                  <Text
                      style={styles.panelText} >
                      {text}
                  </Text>
          </ImageBackground>
           </View>
      </TouchableHighlight>
    );
  }
}

