import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      accountNumber: '',
      password: '',
    };
  }
  
  onLogin() {
    const { accountNumber, password } = this.state;

    Alert.alert('Credentials', `${accountNumber} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.accountNumber}
          onChangeText={(accountNumber) => this.setState({ accountNumber })}
          placeholder={'Account No.'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
