/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetails';

export default class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbum() {
    return this.state.albums.map(album => <AlbumDetails key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.albums.length
            ? <View>{this.renderAlbum()}</View>
            : <Text>Loading...</Text>
        }
      </ScrollView>
    );
  }
}
