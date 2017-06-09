import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
    {props.children}
    </Text>
    </TouchableOpacity>
  );

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 10,
    marginRight: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10

  }

};

export { Button };
