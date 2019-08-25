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
import { Icon } from "react-native-elements";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{
            width: "100%",
            marginTop: "-3%",
            height: Dimensions.get("window").height / 4
          }}
          source={require("../assets/images/ProfileHeader.png")}
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
        <Text style={{ marginTop: "37%", marginLeft: "3%", color: "#626060" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Your Profile:
          </Text>
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            color: "#626060",
            marginLeft: "3%"
          }}
        >
          First Name: Jarod
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            color: "#626060",
            marginLeft: "3%"
          }}
        >
          Last Name: Sebastian
        </Text>
        <Text></Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            color: "#626060",
            marginLeft: "3%"
          }}
        >
          Address: 117 Pershire Street
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            color: "#626060",
            marginLeft: "3%"
          }}
        >
          City: Scarborough
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            color: "#626060",
            marginLeft: "3%"
          }}
        >
          Province: Ontario
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            color: "#626060",
            marginLeft: "3%"
          }}
        >
          Postal Code: M1V 4M6
        </Text>
        <Text></Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            color: "#626060",
            marginLeft: "3%"
          }}
        >
          House Type: Detached
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            color: "#626060",
            marginLeft: "3%"
          }}
        >
          Year Built: 2001
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            color: "#626060",
            marginLeft: "3%"
          }}
        >
          Size: 2107.4 sq.ft.
        </Text>
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
  customBtnText: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    marginTop: "auto",
    color: "#1A90F5"
  },
  iconStyle: {
    marginBottom: "-40%",
    marginLeft: "-20%",
    justifyContent: "flex-start"
  }
});
