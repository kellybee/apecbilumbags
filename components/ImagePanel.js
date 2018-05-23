import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
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
        margin: 5,
    },
    panelText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 26,
        margin: 10,
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        marginTop: 100
    },
    smallImgBackground: {
        width: 100,
        height: 100,
    },
    smallPanelText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    smallHalfHeight: {
            flex: 2,
            alignItems: 'center',
        },
};

export default class ImagePanel extends Component {
  render() {
    const { imgSrc, text, small } = this.props;
    return (
        <View style={small ? styles.smallHalfHeight : styles.halfHeight} >
          <ImageBackground
              style={small ? styles.smallImgBackground : styles.imageBackground}
              source={imgSrc} >
              <Text
                  style={small ? styles.smallPanelText : styles.panelText} >
                  {text}
              </Text>
          </ImageBackground>
       </View>
    );
  }
}

