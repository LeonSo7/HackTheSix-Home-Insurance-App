import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

const LoginNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
});

LoginNavigator.navigatorOptions = {

};

export default LoginNavigator;

