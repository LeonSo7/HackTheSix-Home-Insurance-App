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
          source={require("../assets/images/HeaderImage.png")}
        />
        <View style={styles.buttons}>
          <View>
            <TouchableOpacity
              style={styles.customBtnBG1}
              onPress={() => {
                this.props.navigation.navigate("Profile");
              }}
            >
              <View style={{ paddingTop: 25 }}>
                <Icon name="person" type="octicon" color="grey" size={70} />
                <Text
                  style={[
                    styles.customBtnText,
                    { fontWeight: "bold", fontSize: 21 }
                  ]}
                >
                  Profile
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG1}
              onPress={() => {
                this.props.navigation.navigate("Asset");
              }}
            >
              <View style={{ paddingTop: 25 }}>
                <Icon name="ruby" type="octicon" color="grey" size={70} />
                <Text
                  style={[
                    styles.customBtnText,
                    { fontWeight: "bold", fontSize: 21 }
                  ]}
                >
                  Assets
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.customBtnBG1}
              onPress={() => {
                this.props.navigation.navigate("Claims");
              }}
            >
              <View style={{ paddingTop: 25 }}>
                <Icon name="alert" type="octicon" color="grey" size={70} />
                <Text
                  style={[
                    styles.customBtnText,
                    { fontWeight: "bold", fontSize: 21 }
                  ]}
                >
                  Make a Claim
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG1}
              onPress={() => {
                this.props.navigation.navigate("Systems");
              }}
            >
              <View style={{ paddingTop: 25 }}>
                <Icon name="shield" type="octicon" color="grey" size={70} />
                <Text
                  style={[
                    styles.customBtnText,
                    { fontWeight: "bold", fontSize: 21 }
                  ]}
                >
                  Systems
                </Text>
              </View>
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
    marginTop: "10%",
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
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#CBC9C9",
    width: (Dimensions.get("window").width * 9) / 20,
    marginRight: "2%",
    marginLeft: "2%",
    marginBottom: "2%",
    marginTop: "5%",
    height: (Dimensions.get("window").width * 9) / 20,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowColor: "#8C8C8C"
  }
});
