import React, { Component } from 'react';
import {Button, TextInput, View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class ClaimsScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };
  }
  
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  renderCamera(){
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View>
          <Camera type={this.state.type}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
              }}>
            </View>
          </Camera>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
          <Image
          style={{
            width: "100%",
            marginTop: "-3%",
            height: (Dimensions.get("window").height) / 4
          }}
          source={require("../assets/images/ClaimsHeader.png")}
        />
        <View>
            {this.renderCamera()}
        </View>
        <Text>hello world {this.state.hasCameraPermission ? 
        "YES" : "NO"} {this.state.type}</Text>
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
