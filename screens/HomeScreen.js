import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';


const rows = [
  { id: 0, text: 'View' },
  { id: 1, text: 'Text' },
  { id: 2, text: 'Image' },
  { id: 3, text: 'ScrollView' },
  { id: 4, text: 'ListView' },
]

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})

const extractKey = ({ id }) => id

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {

    return {
      title: 'Activity',
      headerRight: (
        <Ionicons
          onPress={() => navigation.navigate('NewPost', {})}
          name="ios-add" size={40} color="blue" style={{ paddingRight: 15 }} />
      )
    }
  };

  renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return (

      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}
