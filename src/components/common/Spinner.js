import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
      {/*What line seven is doing is if you pass in a size property
        otherise if we do not specify size for spinner you get a large spinner*/}
    </View>
  );

const styles = {
  spinnerStyle: {
    flex: 1, //fils up the full width of the screen
    justifyContent: 'center',
    alignItems: 'center'
  }
};


export { Spinner };
