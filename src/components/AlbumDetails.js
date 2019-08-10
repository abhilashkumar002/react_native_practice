/* eslint-disable camelcase */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, Linking
} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetails extends Component {
  render() {
    const {
      title, artist, thumbnail_image, image, url
    } = this.props.album;
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={styles.titleStyle}>
            <Text style={styles.textStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={{ height: 300, width: null, flex: 1 }}
            source={{ uri: image }}
          />
        </CardSection>
        <CardSection>
          <Button text="Go to store" onpress={() => Linking.openURL(url)}/>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 5
  },
  thumbnailStyle: {
    height: 60,
    width: 60
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500'
  }
});
