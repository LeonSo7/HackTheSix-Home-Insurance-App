import React, { Component } from 'react';
import {Button, TextInput, View, StyleSheet, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

    };
  }
  
  componentDidUpdate() {
 
  }


  render() {
    return (
      <View style={styles.container}>
          <Text>Hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#C0C0C0',
    borderColor: 'white',
    marginBottom: 10,
  },
  loginLogo: {
      width: 350,
      height: 100,
      marginBottom: 30
  }
});
