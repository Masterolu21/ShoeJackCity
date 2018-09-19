import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    paddingBottom: 10,
    padding: 5,
    backgroundColor: '#F13C20',
    borderColor: '#ddd',
  }
};

export { CardSection };
