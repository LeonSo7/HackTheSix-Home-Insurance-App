import * as WebBrowser from "expo-web-browser";
import React from "react";
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

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.customBtnBG1} onPress={() => {}}>
          <Text style={styles.customBtnText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customBtnBG1} onPress={() => {}}>
          <Text style={styles.customBtnText}>Button 2</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.customBtnBG1} onPress={() => {this.props.navigation.navigate("AssetScreen")}}>
          <Text style={styles.customBtnText}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customBtnBG1} onPress={() => {}}>
          <Text style={styles.customBtnText}>Button 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: "20%",
    marginBottom: 0,
    height: Dimensions.get("window").height
  },
  customBtnText: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    color: "#fff"
  },
  customBtnBG1: {
    backgroundColor: "#007aff",
    borderRadius: 5,
    width: "45%",
    marginRight: "2%",
    marginLeft: "2%",
    height: "60%"
  }
});
