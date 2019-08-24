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

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Image
          style={{
            width: "100%",
            height: (Dimensions.get("window").height * 4) / 10
          }}
          source={require("../assets/images/WavyBlue.jpg")}
        />
        <View style={styles.buttons}>
          <View>
            <TouchableOpacity style={styles.customBtnBG1} onPress={() => {}}>
              <Text style={styles.customBtnText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG1}
              onPress={() => {
                this.props.navigation.navigate("Asset");
              }}
            >
              <Text style={styles.customBtnText}>Button 2</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.customBtnBG1} onPress={() => {}}>
              <Text style={styles.customBtnText}>Button 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customBtnBG1} onPress={() => {}}>
              <Text style={styles.customBtnText}>Button 4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: "2%",
    // marginTop: (Dimensions.get("window").height * 4) / 10,
    height: (Dimensions.get("window").height * 95) / 100,
    width: Dimensions.get("window").width - 2
  },
  customBtnText: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    color: "#1A90F5"
  },
  customBtnBG1: {
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    width: (Dimensions.get("window").width * 9) / 20,
    marginRight: "2%",
    marginLeft: "2%",
    marginBottom: "2%",
    marginTop: "5%",
    height: (Dimensions.get("window").height - 1) / 4
  }
});
