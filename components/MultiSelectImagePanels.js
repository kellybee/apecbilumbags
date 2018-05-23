import React, { Component } from 'react';
import {
    Button,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    FlatList,
    TouchableOpacity,
    } from 'react-native';


class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
            <ImageBackground
                  style={[...styles.imageBackground, color: textColor ]}
                  source={imgSrc} >
                  <Text
                      style={[...styles.panelText, color: textColor ]} >
                      {title}
                  </Text>
            </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class MultiSelectImagePanels extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
      imgSrc={item.imgSrc}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
