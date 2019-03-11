import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  //functional component

  const { input, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autocorrect={false}
        value={value}
        placeholderTextColor='white'
        style={input}
        onSubmitEditing={() => this.passwordInput.focus()}
        onChangeText={onChangeText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
   backgroundColor: '#FCD183',
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 10
  },

});

export { Input };
