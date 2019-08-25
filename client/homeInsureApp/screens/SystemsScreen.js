import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

export default class SystemsScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: []
    };
    this.props = props;
    this.init();
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
        <Image
          style={{
            width: "100%",
            marginTop: "-3%",
            height: Dimensions.get("window").height / 4
          }}
          source={require("../assets/images/AssetsHeader.png")}
        />
        <TouchableOpacity>
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
  }
});
