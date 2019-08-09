import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  const { headerStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={headerStyle}>Header</Text>
    </View>
  );
}

const styles = {
  viewStyle:{
    backgroundColor: "blue"
  },
  headerStyle: {
    fontSize: 40
  }
}

export default Header;