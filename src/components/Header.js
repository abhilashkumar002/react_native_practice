import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  const { headerStyle, viewStyle } = styles;
  const { headerText } = props;
  return (
    <View style={viewStyle}>
      <Text style={headerStyle}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 80,
    elevation: 2,
    position: 'relative',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 1
  },
  headerStyle: {
    fontSize: 40,
    color: 'red'
  }
});

export default Header;
