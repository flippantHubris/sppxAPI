import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText }) => (
  <View>
    <Text>{ label }</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={{ height: 40, width: 100 }}
    />
  </View>
);

export { Input };
