import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  Button
} from "react-native";

export default class AssetScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: [],
      modalVisible: true,
      name: "",
      discription: "",
      cost: ""
    };
    this.props = props;
    this.init();
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  init() {
    this.state = {
      testAssets: [
        {
          name: "Kevin's Big Bed",
          photo: "../assets/images/bed.jpg"
        },
        {
          name: "Kevin's Big Piano",
          photo: "../assets/images/pianos.jpg"
        }
      ]
    };
  }

  _renderTouchable = ({ item }) => {
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={() => {}}>
          {this.renderAssets(item)}
        </TouchableOpacity>
      </View>
    );
  };

  renderAssets(item) {
    // const { photoSrc } = item.photo;
    return (
      <View style={styles.assetsContainer}>
        <View>{/* <Image source={require(photoSrc)} /> */}</View>
        <Text
          style={{
            paddingTop: 18,
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: 20,
            color: "grey"
          }}
        >
          {item.name}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        {/*Asset Image*/}
        <Image
          style={{
            width: "100%",
            marginTop: "-3%",
            height: Dimensions.get("window").height / 4
          }}
          source={require("../assets/images/AssetsHeader.png")}
        />
         <TouchableOpacity style={styles.customBtnBG1} onPress={() => 
        {this.props.navigation.navigate("Main")}}>
              <Text style={styles.customBtnText}>Back</Text>
            </TouchableOpacity> 
        {/* Add Asset Button */}
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          {this.state.modalVisible ? (
            <Modal visible={this.state.modalVisible}>
              <View>
                <View style={{ marginTop: 22 }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text>[Cancel]</Text>
                  </TouchableOpacity>
                  <Text />
                  <Text />
                  <Text />
                  <Text />
                  <Text />
                  <Text />
                  <View>
                    <Text style={{ alignItems: "center" }}>Asset: </Text>
                    <TextInput
                      value={this.state.name}
                      onChangeText={name => this.setState({ name })}
                      placeholder={"Asset Name"}
                      style={styles.input}
                    />
                    <Text style={{ alignItems: "center" }}>Discription: </Text>
                    <TextInput
                      value={this.state.discription}
                      onChangeText={discrption => this.setState({ discrption })}
                      placeholder={"Discription"}
                      style={styles.input}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.customBtnBG1}
                    onPress={() =>
                      this.setState(prevState => ({
                        myArray: [
                          {
                            name: this.state.name,
                            discription: this.state.discription
                          },
                          ...prevState.testAssets
                        ]
                      }))
                    }
                  >
                    <Text style={styles.customBtnText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          ) : null}

          <View style={styles.addButtonContainer}>
            <Text
              style={{
                paddingTop: 18,
                textAlignVertical: "center",
                textAlign: "center",
                fontSize: 25,
                color: "grey"
              }}
            >
              + Add Asset
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1, marginBottom: 10 }}>
          <FlatList
            data={this.state.testAssets}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderTouchable.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "red"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  contentContainer: {
    paddingTop: 3,
    paddingBottom: 5,
    flex: 1
  },
  assetsContainer: {
    backgroundColor: "#fff",
    alignSelf: "stretch",
    margin: 1,
    marginHorizontal: 3,
    padding: 8,
    borderRadius: 20,
    height: 80,
    borderWidth: 0.5,
    borderColor: "#e0e0e0"
  },
  customBtnText: {
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
    color: "#1A90F5"
  },
  addButtonContainer: {
    backgroundColor: "#fff",
    alignSelf: "stretch",
    margin: 1,
    marginHorizontal: 3,
    padding: 8,
    borderRadius: 20,
    height: 80,
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
    alignContent: "center"
  },
  customBtnBG1: {
    backgroundColor: "lightblue",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#CBC9C9",
    marginRight: "2%",
    marginLeft: "2%",
    marginBottom: "2%",
    marginTop: "70%",
    height: "15%",
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
  }
});
