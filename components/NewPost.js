import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Constants } from 'expo';
import { SearchBar } from 'react-native-elements'; // 0.17.0
import { ListItem, CheckBox, Text, Body } from 'native-base';

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
        <View style={{ borderBottomColor: '#A9A9A9', borderBottomWidth: 1 }}>
          <TextInput
            style={{
              height: 40,
              borderColor: '#A9A9A9',
              borderWidth: 1,
              backgroundColor: '#D3D3D3',
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder=" Type here..."
          />
        </View>
        {/* <SearchBar
          lightTheme
          autoCorrect
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 300, height: 44, padding: 8, color: '#000' }}
        /> */}
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
});
