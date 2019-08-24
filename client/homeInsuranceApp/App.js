// @flow
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Container } from "native-base";
// import { Provider } from "react-redux";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "../navigation/AppNavigator";
// import store from "./src/redux/store";
// import Sentry from "sentry-expo";

// Sentry.config(
//   "https://0c78b61c4982412682614032231d5d82@sentry.io/1340013"
// ).install();

export default class App extends React.Component() {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        // <Provider store={store}>
          <Container style={styles.container}>
            <StatusBar />
            <AppNavigator />
          </Container>
        // </Provider>
      );
    }
  }

  _handleLoadingError = error => {
    /* In this case, you might want to report the error to your error
      reporting service, for example Sentry */
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
