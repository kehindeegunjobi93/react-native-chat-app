import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import User from '../User';
import firebase from '@firebase/app';
import '@firebase/database';

 export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount(){
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCfkAFB0v8I7XLvs8IjLV6Fcod_hOvE4Ac",
    authDomain: "fir-chat-9a478.firebaseapp.com",
    databaseURL: "https://fir-chat-9a478.firebaseio.com",
    projectId: "fir-chat-9a478",
    storageBucket: "fir-chat-9a478.appspot.com",
    messagingSenderId: "748284759549"
  };
  firebase.initializeApp(config);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}