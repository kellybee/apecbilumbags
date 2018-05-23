import React, { Component } from 'react';
import {
    Button,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
    } from 'react-native';
import ImagePanel from './ImagePanel';

const styles = {
    halfHeight: {
        flex: 2,
    },
};

export default class TouchPanel extends Component {
  render() {
    const { navigateTo, navigation, imgSrc, text } = this.props;
    return (
      <TouchableHighlight style={styles.halfHeight}
          onPress={() => navigation.navigate(navigateTo)}>
          <ImagePanel text={text} imgSrc={imgSrc} />
      </TouchableHighlight>
    );
  }
}

