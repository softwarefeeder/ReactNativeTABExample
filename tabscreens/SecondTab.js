// Second screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View } from 'react-native';
//import all the components we are going to use.
 
export default class SecondTab extends React.Component {
  render() {
    return (
      <View style={
        { flex: 1, 
        justifyContent: 'center',
         alignItems: 'center'
          }}>
        <Text>Welcome to Second Screen</Text>
      </View>
    );
  }
}