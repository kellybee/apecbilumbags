import React, { Component } from 'react';
import {
    Text,
    } from 'react-native';

const styles = {
    descriptionText: {
        color: '#fff',
        fontSize: 20,
        padding: 5,
    }
};

export default class TextDescription extends Component {
  render() {
    const { text } = this.props;
    return (
        <Text
          style={styles.descriptionText} >
          {text}
        </Text>
    );
  }
}
