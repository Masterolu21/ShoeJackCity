import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator, withNavigation } from 'react-navigation';
import { Button, CardSection, Input, Spinner } from './common';
import SignUpForm from './SignUpForm';
import router from '../config/router';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  //helper function
  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
 /* You can change and add as many variables to a state object to a setState Call*/
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
    });
  }
onLoginFail() {
  this.setState({
    error: 'Authentication Failed', loading: false });
}

onLoginSuccess() {
  this.setState({
    email: '',
    password: '',
    loading: false,
    error: ''
  });
}

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <TouchableOpacity
      onPress={this.onButtonPress.bind(this)}
      style={styles.buttonContainer}
      >
      <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder="Username or email"
          returnKeyType='next'
          keyboardType="email-address"
        />

        <Input
          secureTextEntry //turns text into *** good for passwords
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder="password"
          placeholderTextColor='white'
          returnKeyType='go'
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

      {this.renderButton()}

      <Text style={styles.textStyle}> Need help logging in?{'\n'}
          or
      </Text>

      <View style={styles.divider} />
      <TouchableOpacity
        navigation={this.props.navigation}
        style={styles.buttonContainer}
        onPress={() => this.props.navigation.navigate('SignUpForm')}
      >
      <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  errorTextStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20
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
});

export default LoginForm;
