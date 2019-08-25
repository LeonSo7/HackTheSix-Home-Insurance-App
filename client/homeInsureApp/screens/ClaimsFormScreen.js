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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { connect } from "react-redux";
var radio_props = [
  { label: "Garage", value: 0 },
  { label: "Roof", value: 0 },
  { label: "Room", value: 0 }
];
import RNPickerSelect from "react-native-picker-select";

class ClaimsFormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: this.props.claimsFormPage,
      photo64: props.navigation.state.params.photo
    };
  }

  render() {
    return (
      <View>
        <Image
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height / 2
          }}
          source={{ uri: `data:image/jpg;base64,${this.state.photo64}` }}
        />
        <View style={styles.selectButton}>
          <RNPickerSelect
            placeholder={{
              label: "Select an asset...",
            }}
            onValueChange={value => console.log(value)}
            items={this.state.assets.map(asset => ({
              label: asset.name,
              value: asset.id
            }))}
            style={{
              ...pickerSelectStyles,
              placeholder: {
                color: "grey",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 25,
                marginLeft: 20
              }
            }}
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.customBtnBG1}>
            <Text style={styles.customBtnText}>Submit Claim</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectButton: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#CBC9C9",
    marginLeft: "7%",
    marginTop: "10%",
    width: Dimensions.get("window").width - 50,
    height: 80,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowColor: "#8C8C8C"
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
  buttons: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: "2%",
    marginTop: "10%",
    height: (Dimensions.get("window").height * 95) / 100,
    width: Dimensions.get("window").width - 2
  },
  customBtnText: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  customBtnBG1: {
    backgroundColor: "#1a90f5",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#CBC9C9",
    width: Dimensions.get("window").width - 50,
    height: 100,
    marginLeft: "7%",
    marginTop: "20%",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowColor: "#8C8C8C"
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: "grey",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginLeft: 20
  },
});

const mapStateToProps = state => {
  console.log(state);
  return { claimsFormPage: state.Assets };
};

export default connect(mapStateToProps)(ClaimsFormScreen);
