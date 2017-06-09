import Expo from 'expo';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import api from './src/api'
import API from './src/API'



class App extends React.Component {

  _handleButtonPress = () => {


  console.log(this.myAPI.getToken());
  this.myAPI.setToken();
  this.myAPI.login();

  

      //Alert.alert('Button pressed!', 'You did it!');
    };


  willMount(){
    console.log('yoooo sdsdsdsdsdsddfgdfgdfgdfgfdgdf sdsdsd sdo');

  }

  render() {
    this.myAPI = new API();

    return (


      <View style={styles.container}>
        <Text>yo er asasss</Text>

      <Button title="Press me" onPress={this._handleButtonPress} />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
