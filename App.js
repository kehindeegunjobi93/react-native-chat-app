import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Alert, AsyncStorage, TouchableOpacity} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppStack = createStackNavigator({ 
  Home: HomeScreen, 
  Chat: ChatScreen,
Profile: ProfileScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
