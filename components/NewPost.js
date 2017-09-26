import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { SearchBar } from 'react-native-elements'; // 0.17.0


export default class NewPost extends Component {
  state = {
    inputValue: '',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 290, height: 44, padding: 8, border: 2, color: '#000' }}
        />

      </View>
    );
  }
}

const onSelect = suggestion => {
  console.log(suggestion); // the pressed suggestion
};

const suggestions = [
  { text: 'suggestion1', anotherProperty: 'value' },
  { text: 'suggestion2', anotherProperty: 'value2' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
