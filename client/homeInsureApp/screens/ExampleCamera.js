import React from "react";
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

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    photo64: "badddd",
    photoUri: null,
    status: "picture not taken"
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  componentDidUpdate() {
    console.log(this.state.status);
    console.log(this.state.photoUri)
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
          <Camera
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height/2
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
          <View style={{ marginTop: "-38%" }}>
            <Icon name="camera" type='evilicon' color="black" size={100} />
          </View>
          <TouchableOpacity onPress={this.snap.bind(this)}>
            <View style={styles.snapButton} opacity={0.2}></View>
          </TouchableOpacity>
          <Text>status:{this.state.status}</Text>
          <View>
        <Image
        style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height/2
          }}
          source={{uri: `data:image/jpg;base64,${this.state.photo64}`}}
        />
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
  }
});
