import React, {Component} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image
} from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { Icon } from "react-native-elements";

export default class ExampleCamera extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    photo64: "bad",
    photoUri: null,
    status: "picture not taken"
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  componentDidUpdate() {
  }

  async snap() {
    if (this.camera) {
      const captured = await this.camera.takePictureAsync({ base64: true });
      this.setState({
        photoUri: captured.uri,
        photo64: captured.base64,
        status: "picture taken"
      });
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1}}>
          <TouchableOpacity style={styles.back} onPress={() => 
        {this.props.navigation.navigate("Main")}}>
              <Text style={styles.customBtnText}>Back</Text>
            </TouchableOpacity> 
          <Camera
            style={{
              width: Dimensions.get("window").width,
              height: (Dimensions.get("window").height - 10)/2,
              marginTop: "-87%"
            }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Flip{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
          {/* </View> */}
          <View style={{ marginTop: "-28%" }}>
            <Icon name="camera" type='evilicon' color="black" size={100} />
          </View>
          <TouchableOpacity onPress={this.snap.bind(this)}>
            <View style={styles.snapButton} opacity={0.2}></View>
          </TouchableOpacity>
          <View>
        <Image
        style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height/2 - 25,
            marginTop: "5%"
          }}
          source={{uri: `data:image/jpg;base64,${this.state.photo64}`}}
        />
        <TouchableOpacity style={styles.customBtnBG1} onPress={() => 
        {if (this.state.photo64 != "bad"){this.props.navigation.navigate("ClaimForm", {photo: this.state.photo64})}}}>
              <Text style={styles.customBtnText}>Create Claim</Text>
            </TouchableOpacity>
        </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  snapButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    height: 100,
    width: 100,
    marginTop: "-23%",
    marginLeft: (Dimensions.get("window").width - 100) / 2,
    alignItems: "center"
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
    marginTop: "8%",
    color: "#1A90F5",
    fontWeight: "bold"
  },
  customBtnBG1: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#CBC9C9",
    width: (Dimensions.get("window").width) - 200,
    marginRight: "0%",
    marginLeft: "25%",
    marginBottom: "%",
    marginTop: "-30%",
    height: 70,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowColor: "#8C8C8C"
  },
  back: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#CBC9C9",
    width: (Dimensions.get("window").width * 9) / 20,
    marginRight: "0%",
    marginLeft: "2%",
    marginBottom: "%",
    marginTop: "50%",
    height: (Dimensions.get("window").width * 9) / 20,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowColor: "#8C8C8C"
  }
});
