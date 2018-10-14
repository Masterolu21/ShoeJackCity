import React from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Card, Button, Spinner, CardSection } from '../common';
import LoginForm from '../LoginForm';
import router from '../../config/router';

class Account extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Account'
  }
  render() {
    return (<View style={styles.containerStyle}>
      <Card>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../Images/ShoeJackCityLogo.png')} />
        </View>
        <View style={styles.formContainer}>
          <LoginForm
            navigation={this.props.navigation}
              onPress={() => this.props.navigation.navigate('SignUpForm')}
          />
        </View>
      </Card>
    </View>);
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#F13C20',
    paddingBottom: 20
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 0
  },
  logo: {
    paddingTop: 15,
    width: 200,
    height: 200
  },
  registerContainer: {
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
  buttonContainer: {
    backgroundColor: '#FCBA12',
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'

  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  }
};

export default Account; /*if export the RootStack I lose my header format*/
