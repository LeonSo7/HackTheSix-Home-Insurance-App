import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
    Dimensions,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Icon } from "react-native-elements";

export default class ResultScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result:  this.props.navigation.state.params.claimAmount
        }
    }
    render() {
        return (
            <View>
                <View style={{marginTop: 100, marginLeft: 100}}>
                <Text style={{fontSize: 20}}><Text>Estimated coverage: </Text>{this.state.result}</Text>
                </View>
                <TouchableOpacity
            style={[
              styles.customBtnBG1,
              {
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: "20%",
                height: 120,
                backgroundColor: "#A5A2A2"
              }
            ]}
            onPress={() => {
              this.props.navigation.navigate("Main");
            }}
          >
            <Text
              style={[
                styles.customBtnText,
                { marginTop: 40, fontWeight: "bold", color: "white" }
              ]}
            >
              Return to Home
            </Text>
          </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white"
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderBottomColor: "#C0C0C0",
      borderColor: "white",
      marginBottom: 10
    },
    loginLogo: {
      width: 350,
      height: 100,
      marginBottom: 30
    },
    customBtnText: {
      fontSize: 25,
      fontWeight: "400",
      textAlign: "center",
      marginTop: "auto",
      color: "#1A90F5"
    },
    customBtnBG1: {
      backgroundColor: "white",
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: "#CBC9C9",
      width: (Dimensions.get("window").width * 9) / 10,
      marginRight: "2%",
      marginLeft: "2%",
      marginBottom: "2%",
      marginTop: "0%",
      height: (Dimensions.get("window").width * 5) / 10,
      shadowOffset: { width: 1, height: 4 },
      shadowOpacity: 0.8,
      shadowColor: "#8C8C8C"
    }
  });
  