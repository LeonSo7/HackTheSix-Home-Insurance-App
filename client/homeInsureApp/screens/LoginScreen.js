import React, { Component } from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Image
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountNumber: "",
      password: "",
      enteredPass: ""
    };
  }

  componentDidUpdate() {
    if (this.state.enteredPass == "TestPass") {
      this.props.navigation.navigate("Main");
    }
  }

  onLogin() {
    // this.setState({enteredPass: this.state.password});
    this.props.navigation.navigate("Main");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/longIcon.png")}
          style={styles.loginLogo}
        />
        <TextInput
          value={this.state.accountNumber}
          onChangeText={accountNumber => this.setState({ accountNumber })}
          placeholder={"Account No."}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={"Password"}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={"Login"}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
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
  loginLogo: {
    width: 350,
    height: 100,
    marginBottom: 30
  }
});
