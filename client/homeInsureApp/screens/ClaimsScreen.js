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
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";

export default class ClaimsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image
          style={{
            width: "100%",
            marginTop: "-3%",
            height: Dimensions.get("window").height / 4
          }}
          source={require("../assets/images/ClaimsHeader.png")}
        />
        <TouchableOpacity
          style={[styles.back, { marginTop: "-40%" }, { marginLeft: "3%" }]}
          onPress={() => {
            this.props.navigation.navigate("Main");
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 50
            }}
          >
            ‹
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              marginTop: "35%",
              alignItems: "center",
              fontSize: 20,
              color: "#626060",
              marginLeft: "3%",
              fontWeight: "bold",
              textDecorationLine: "underline"
            }}
          >
            How to Submit a Claim:
          </Text>
          <Text
            style={{
              marginLeft: "3%",
              marginRight: "3%",
              alignItems: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#626060"
            }}
          >
            Step 1:
          </Text>
          <Text
            style={{
              marginLeft: "3%",
              marginRight: "3%",
              alignItems: "center",
              fontSize: 20,
              color: "#626060"
            }}
          >
            Take a Picture that best shows the extent of the damages.
          </Text>
          <Text
            style={{
              marginLeft: "3%",
              marginRight: "3%",
              alignItems: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#626060"
            }}
          >
            Step 2:
          </Text>
          <Text
            style={{
              marginLeft: "3%",
              marginRight: "3%",
              alignItems: "center",
              fontSize: 20,
              color: "#626060"
            }}
          >
            Report the Details of the damages.
          </Text>
          <Text
            style={{
              marginLeft: "3%",
              marginRight: "3%",
              alignItems: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#626060"
            }}
          >
            Step 3:
          </Text>
          <Text
            style={{
              marginLeft: "3%",
              marginRight: "3%",
              alignItems: "center",
              fontSize: 20,
              color: "#626060"
            }}
          >
            Submit!
          </Text>
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
              this.props.navigation.navigate("ExampleCamera");
            }}
          >
            <Text
              style={[
                styles.customBtnText,
                { marginTop: 40, fontWeight: "bold", color: "white" }
              ]}
            >
              Continue to Camera
            </Text>
          </TouchableOpacity>
        </View>
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
