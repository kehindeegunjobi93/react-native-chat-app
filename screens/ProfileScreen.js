import React from 'react';
import {View, Text, AsyncStorage, TouchableOpacity, Alert} from 'react-native';
import User from '../User';
import styles from '../constants/styles'
import { TextInput } from 'react-native-gesture-handler';
import firebase from '@firebase/app';
import '@firebase/database';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile'
    }

    state = {
        name: User.name
    }

    handleChange = key => val => {
        this.setState({[key]:val})
    }

    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    changeName = async () => {
        if(this.state.name.length<3){
            Alert.alert('Error', 'Please enter a valid name');
        }else if(User.name !== this.state.name){
            firebase.database().ref('users').child(User.phone).set({name:this.state.name});
            User.name = this.state.name;
            Alert.alert('Success', 'Name changed successfully')
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize:20}}>
                    {User.phone}
                </Text>
                <Text style={{fontSize:20}}>
                    {User.name}
                </Text>
                <TextInput
                style={styles.input}
                  value={this.state.name}
                  onChangeText={this.handleChange('name')} 
                />
                <TouchableOpacity onPress={this.changeName}>
                    <Text style={styles.btnText}>Change Name</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._logOut}>
                    <Text style={styles.btnText}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}