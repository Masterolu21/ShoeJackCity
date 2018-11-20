import React, {
  Component
} from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Spinner from 'react-native-spinkit';

import {
  colors,
} from '../config';


class StartUpScreen extends Component {
  state = {
    fontLoaded: false,
  }

  constructor(props) {
    super(props);
  }

  async componentDidMount() {

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded != true) {
      return (
        <View />
      )
    }

    setTimeout(
      () => {
        this.props.navigation.navigate('AuthStack');
      }, 2000
    );

    return (
      <View
        style={styles.container}
      >
        <Text style={styles.title}>ShoeJackCity</Text>
        <Spinner
          type='Bounce'
          color={colors.primaryBlueColor}
          size={80}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  title: {
    color: colors.primaryBlueColor,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    marginBottom: 20,
  }
});

export default StartUpScreen;
