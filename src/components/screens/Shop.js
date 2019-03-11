import React from 'react';
import Divider from 'react-native-divider';
import { View, Text, Button, ImageScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class Shop extends React.Component {
  static navigationOptions= {
    tabBarLabel: 'Shop'
  }
    render() {
      return (
      <View style={styles.divider} />
        );
      }
    }
    const styles = StyleSheet.create({
      divider: {
      borderBottomColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    }
  );
