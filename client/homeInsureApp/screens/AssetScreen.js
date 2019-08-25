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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { connect } from "react-redux";
import { ADD_ASSETS } from "../redux/actions";

var radio_props = [
  { label: "Item", value: 0 },
  { label: "Structure", value: 1 }
];

var radio_props2 = [
  { label: "Room", value: 0 },
  { label: "Garage", value: 1 },
  { label: "Roof", value: 2 },
  { label: "Basement", value: 3 }
];

class AssetScreen extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }
  state = {
    errors: this.props.navigation.state.params.state.errors,
    id: this.props.navigation.state.params.state.id,
    modalVisible: this.props.navigation.state.params.state.modalVisible,
    objModalVisible: this.props.navigation.state.params.state.objModalVisible,
    name: this.props.navigation.state.params.state.name,
    type: this.props.navigation.state.params.state.type,
    structure: this.props.navigation.state.params.state.structure,
    cost: this.props.navigation.state.params.state.cost,
    totalNumber: this.props.navigation.state.params.state.totalNumber,
    // errors: [],
    // id: "",
    // modalVisible: false,
    // objModalVisible: false,
    // name: "",
    // type: "Item",
    // structure: "Room",
    // cost: "",
    // totalNumber: 2,
    picture64: this.props.navigation.state.params.photo64,
    testAssets: this.props.assetPage
  };

  componentDidUpdate() {
    {
      this.addActionDispatch(this.state.testAssets);
    }
  }

  addActionDispatch(state) {
    const action = {
      type: ADD_ASSETS,
      payload: state
    };

    this.props.dispatch(action);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _renderTouchable = ({ item }) => {
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ objModalVisible: true, id: item.id });
          }}
        >
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

  addItem() {
    const obj = {
      name: this.state.name,
      type: this.state.type,
      structure: this.state.structure,
      cost: this.state.cost,
      id: this.state.totalNumber,
      picture64: this.state.picture64
    };

    const newArray = this.state.testAssets.slice(); // Create a copy
    newArray.push(obj); // Push the object
    this.setState({
      testAssets: newArray,
      modalVisible: false,
      name: "",
      type: "Item",
      structure: "Room",
      cost: "",
      totalNumber: this.state.totalNumber + 1,
      id: ""
    });
  }

  objModal() {
    let id = this.state.id;
    return (
      <View>
        <Text>Asset: {this.state.testAssets[id].name}</Text>
        <Text>Type: {this.state.testAssets[id].type}</Text>
        {this.state.testAssets[id].structure ? (
          <View>
            <Text>Structure: {this.state.testAssets[id].structure}</Text>
            <Text>Value: {this.state.testAssets[id].cost}</Text>
          </View>
        ) : (
          <Text>Value: {this.state.testAssets[id].cost}</Text>
        )}
        <Image
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height / 2
          }}
          source={{
            uri: `data:image/jpg;base64,${this.state.testAssets[id].picture64}`
          }}
        />
      </View>
    );
  }

  addPhotoButton() {
    if (this.state.picture64 == null) {
      return (
        <View>
          <TouchableOpacity
            style={styles.customBtnBG1}
            onPress={() => {
              this.props.navigation.navigate("AssetCamera", {
                state: this.state
              });
            }}
          >
            <Text style={styles.customBtnText}>Take Photo of Asset</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <TouchableOpacity
            style={styles.customBtnBG1}
            onPress={() => {
              this.addItem();
            }}
          >
            <Text style={styles.customBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
        {/* Add Asset Button */}
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          {this.state.modalVisible ? (
            <Modal visible={this.state.modalVisible}>
              <View>
                <Image
                  source={require("../assets/images/AddAssetsHeader.png")}
                  style={{
                    width: "100%",
                    marginTop: "-3%",
                    height: Dimensions.get("window").height / 3
                  }}
                />
                <View style={{ marginTop: 22 }}>
                  <View style={{ marginTop: "-60%", height: 60 }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "bold",
                          marginTop: "-5%",
                          marginLeft: "3%"
                        }}
                      >
                        {" "}
                        {"[Cancel]"}{" "}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginTop: "40%", marginLeft: "10%" }}>
                    <Text style={{ alignItems: "center" }}>Asset: </Text>
                    <TextInput
                      value={this.state.name}
                      onChangeText={name => this.setState({ name })}
                      placeholder={"Asset Name"}
                      style={styles.input}
                    />
                    <View>
                      <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={type => {
                          type === 1
                            ? this.setState({ type: "Structure" })
                            : this.setState({ type: "Item" });
                        }}
                      />
                    </View>
                    {this.state.type === "Structure" ? (
                      <View>
                        <Text>Structure Type: </Text>
                        <RadioForm
                          radio_props={radio_props2}
                          initial={0}
                          onPress={type => {
                            type === 1
                              ? this.setState({ structure: "Roof" })
                              : type === 2
                              ? this.setState({ structure: "Garage" })
                              : type === 3
                              ? this.setState({ structure: "Basement" })
                              : this.setState({ structure: "Room" });
                          }}
                        />
                        <Text>Full value before damage: </Text>
                        <TextInput
                          value={this.state.cost}
                          onChangeText={cost => this.setState({ cost })}
                          placeholder={"Value"}
                          style={styles.input}
                        />
                      </View>
                    ) : (
                      <View>
                        <Text style={{ alignItems: "center" }}>
                          Full value before damage:{" "}
                        </Text>
                        <TextInput
                          value={this.state.cost}
                          onChangeText={cost =>
                            this.setState({ cost: cost, structure: "" })
                          }
                          placeholder={"Value"}
                          style={styles.input}
                        />
                      </View>
                    )}
                  </View>
                  {this.addPhotoButton()}
                </View>
              </View>
            </Modal>
          ) : null}

          {this.state.objModalVisible === true ? (
            <Modal visible={this.state.objModalVisible}>
              <View>
                <Image
                  source={require("../assets/images/AddAssetsHeader.png")}
                  style={{
                    width: "100%",
                    marginTop: "-3%",
                    height: Dimensions.get("window").height / 3
                  }}
                />
                {this.objModal()}
                <View style={{ marginTop: 22 }}>
                  <View style={{ marginTop: "-60%", height: 60 }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ objModalVisible: false });
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "bold",
                          marginTop: "-5%",
                          marginLeft: "3%"
                        }}
                      >
                        {" "}
                        {"[Cancel]"}{" "}
                      </Text>
                    </TouchableOpacity>
                  </View>
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
        <View style={{ flex: 1, marginBottom: 10, marginTop: 20 }}>
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
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 16
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
    alignContent: "center",
    marginTop: 145
  },
  customBtnBG1: {
    backgroundColor: "#1a90f5",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#CBC9C9",
    marginRight: "2%",
    marginLeft: "2%",
    marginBottom: "30%",
    height: "27%",
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
  cancelButton: {
    marginTop: "-60%",
    backgroundColor: "blue",
    width: 100,
    height: 60
  }
});

const mapStateToProps = state => {
  return { assetPage: state.Assets };
};

export default connect(mapStateToProps)(AssetScreen);
