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

export default class SystemsScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: [],
      id: "",
      modalVisible: false,
      objModalVisible: false,
      name: "",
      cost: "",
      totalNumber: 2,
      testSystems: [
        {
          name: "Security Alarms",
          cost: "12",
          id: 0
        },
        {
          name: "Security Cameras",
          cost: "100",
          id: 1
        }
      ]
    };
    this.props = props;
    // this.init();
    this.addItem = this.addItem.bind(this);
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
          {this.renderSystems(item)}
        </TouchableOpacity>
      </View>
    );
  };

  renderSystems(item) {
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
      cost: this.state.cost,
      id: this.state.totalNumber
    };
    const newArray = this.state.testSystems.slice(); // Create a copy
    newArray.push(obj); // Push the object
    this.setState({
      testSystems: newArray,
      modalVisible: false,
      name: "",
      cost: "",
      totalNumber: this.state.totalNumber + 1,
      id: ""
    });
  }

  objModal() {
    let id = this.state.id;
    return (
      <View>
        <Text>System: {this.state.testSystems[id].name}</Text>
        <Text>Discount: {this.state.testSystems[id].cost}</Text>
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
          source={require("../assets/images/SystemsHeader.png")}
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
                  source={require("../assets/images/AddSystemHeader.png")}
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
                    <Text style={{ alignItems: "center" }}>System:</Text>
                    <TextInput
                      value={this.state.name}
                      onChangeText={name => this.setState({ name })}
                      placeholder={"System Name"}
                      style={styles.input}
                    />

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
                  </View>
                  <TouchableOpacity
                    style={styles.customBtnBG1}
                    onPress={() => {
                      this.addItem();
                    }}
                  >
                    <Text style={styles.customBtnText}>Submit</Text>
                  </TouchableOpacity>
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
              + Add System
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1, marginBottom: 10, marginTop: 20 }}>
          <FlatList
            data={this.state.testSystems}
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
    height: "20%",
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
