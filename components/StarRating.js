import React, { Component } from 'react';
import {
    View,
    Image,
    } from 'react-native';
import Stars from 'react-native-stars';

export default class StarRating extends Component {
  render() {
    const { text, ratingValue } = this.props;
    return (
        <View style={{alignItems:'center'}}>
          <Stars
            value={ratingValue}
            spacing={8}
            count={5}
            starSize={20}
            backingColor='#000'
            fullStar= {require('../assets/starFilled.png')}
            emptyStar= {require('../assets/starEmpty.png')} />
        </View>
    );
  }
}

