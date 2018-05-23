import React, { Component } from 'react';
import {
    Text,
    } from 'react-native';

const styles = {
    headerText: {
        color: '#fff',
        fontSize: 14,
        padding: 5,
    }
};

export default class TextHeader extends Component {
  render() {
    const { text } = this.props;
    return (
        <Text
          style={styles.headerText} >
          {text}
        </Text>
    );
  }
}

