// @flow

import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';

import { authActions } from '../../redux/actions';
import AppTabs from '../../routes/AppTabs';

import {
  dims,
  colors,
  config,
} from '../../config';

import {
  BaseStyle,
} from '../../styles';

import {
  user_png,
} from '../../Assets';

const headerText = 'ShoeJackCity';

const TransparentButton = ({ text, textColor, onPress }) => {
  const textStyle = {
    color: textColor,
    fontWeight: '300',
  }

  return (
    <TouchableOpacity
      style={[BaseStyle.center]}
      onPress={onPress}
    >
      <Text
        style={textStyle}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}


class SignInScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onResetPassword = this.onResetPassword.bind(this);
  }

  onSignIn(e) {
    const { email, password, alias } = this.state;

    this.props.signIn({
      email,
      password,
      alias,
    });
  }

  onSignUp() {
    console.log('sign in clicked');
  }

  onResetPassword() {
    console.log('sign in clicked');
  }

  async componentDidMount() {
    this.setState({ fontLoaded: true });
  }

  componentWillReceiveProps(nextProps) {
    const { authenticated, navigation } = nextProps;
    const { navigate } = navigation;
    if (authenticated) {
      navigate('AppTabs');
    }
  }

  render() {
    const {
      onSignIn,
      onSignUp,
      onResetPassword,
    } = this;

    const { signInLoading } = this.props;
    const { fontLoaded, email, password } = this.state;

    if (fontLoaded !== true) {
      return (
        <View />
      )
    }

    return (
      <View />
    );
  }
}


const width = dims.SCREEN_WIDTH;
const height = dims.SCREEN_HEIGHT;
const spaceHeight = height - 377;

const styles = StyleSheet.create({
});

const mapStateToProps = (state, ownProps) => {
  return {
    signInLoading: state.auth.signInLoading,
    authenticated: state.auth.authenticated,
  };
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => { dispatch(authActions.signIn(email, password)); }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
