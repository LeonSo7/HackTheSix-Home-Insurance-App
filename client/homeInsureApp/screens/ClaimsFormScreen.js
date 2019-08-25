import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import {connect} from 'react-redux';
var radio_props = [
    { label: 'Garage', value: 0 },
    { label: 'Roof', value: 0 },
    { label: 'Room', value: 0 }

];

export default class ClaimsFormScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assets: this.props.claimsFormPage,
            photo64: props.navigation.state.params.photo,
        }
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
                <TextInput
                    value={this.state.name}
                    onChangeText={Name => this.setState({ name: Name })}
                    placeholder={"Name"}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.fullValueBefore}
                    onChangeText={Full => this.setState({ fullValueBefore: Full })}
                    placeholder={"Full Value Before Damages"}
                    style={styles.input}
                    keyboardType={'numeric'}
                />
                <View>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => { this.setState({ value: value }) }}
                    />
                </View>
                <TouchableOpacity style={styles.customBtnBG1} onPress={() => {}}>
                    <Text style={styles.customBtnText}>Submit Claim</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        marginRight: "0%",
        marginLeft: "50%",
        marginBottom: "%",
        marginTop: "-50%",
        height: (Dimensions.get("window").width * 9) / 20,
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.8,
        shadowColor: "#8C8C8C"
      }
});

const mapStateToProps = (state) => {
    console.log(state)
    return { claimsFormPage: state.Assets }
  }

  export default connect(
    mapStateToProps,
  )(ClaimsFormScreen);