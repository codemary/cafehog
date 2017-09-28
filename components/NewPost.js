import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { SearchBar } from 'react-native-elements'; // 0.17.0
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';


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
        <Text>I wish to</Text>
        <Content>
          <ListItem style={styles.list}>
            <CheckBox checked={true} />
            <Body>
              <Text>Learn</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.list}>
            <CheckBox checked={false} />
            <Body>
              <Text>Talk about</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.list}>
            <CheckBox checked={false} />
            <Body>
              <Text>Recruit</Text>
            </Body>
          </ListItem>
        </Content>
        <SearchBar
          lightTheme
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 300, height: 44, padding: 8, color: '#000' }}
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
  list: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    width: 300,
    height: 44,
    padding: 8,
  },
});
