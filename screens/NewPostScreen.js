import React from 'react';
import NewPost from '../components/NewPost';

export default class NewPostScreen extends React.Component {
  static navigationOptions = {
    title: 'Create New',
  };

  render() {
    return <NewPost />;
  }
}
