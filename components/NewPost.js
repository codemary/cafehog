import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Constants } from 'expo';
import { SearchBar } from 'react-native-elements'; // 0.17.0
import { ListItem, CheckBox, Text, Body } from 'native-base';
import TagInput from 'react-native-tag-input';

const rows = [{ id: 0, text: 'Learn' }, { id: 1, text: 'Talk About' }, { id: 2, text: 'Recruit' }];

const extractKey = ({ id }) => id;

export default class NewPost extends Component {
  state = {
    inputValue: '',
    checked: false,
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _toggle = () => {
    this.setState({ checked: !this.state.checked });
  };

  _handleListItem = () => {
    console.log('holla');
  };

  _onTextInput = () => {
    console.log('textInputa');
  };

  renderItem = ({ item }) => {
    return (
      <ListItem style={styles.row} onPress={this._handleListItem}>
        <CheckBox onPress={this.toggle} />
        <Body>
          <Text style={styles.itemText}>{item.text}</Text>
        </Body>
      </ListItem>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I wish to</Text>
        <FlatList
          style={styles.listContainer}
          data={rows}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
        <Text style={styles.text}>Choose a topic</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder=" Type here..."
          autoCapitalize="words"
          autoCorrect
          clearButtonMode="while-editing"
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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
  },
  listContainer: {
    marginLeft: -10,
    marginRight: 5,
  },
  row: {
    padding: 15,
    marginBottom: 5,
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
  itemText: {
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
