import React, { Component } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  customBtnText: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    marginTop: "auto",
    color: "#1A90F5"
  }
});
