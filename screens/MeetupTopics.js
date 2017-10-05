import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';
import { Text } from 'native-base';

export default class MeetupTopics extends Component {
  state = {
    inputValue: '',
    checked: false,
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _handleListItem = () => {
    console.log('holla');
  };

  _onTextInput = () => {
    console.log('textInputa');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Choose a topic</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder=" Type here..."
          autoCapitalize="words"
          clearButtonMode="while-editing"
          autoCorrect
          spellCheck
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
  },
  text: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 25,
    marginBottom: 20,
    fontWeight: '300',
    fontSize: 32,
    fontFamily: 'san-francisco',
  },
  textInput: {
    height: 40,
    margin: 10,
    display: 'flex',
    borderColor: '#A9A9A9',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 1,
  },
});
