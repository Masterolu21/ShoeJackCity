import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen';


import LoginForm from './components/LoginForm';
import Tournaments from './components/screens/Tournaments';
import Account from './components/screens/Account';
import Artists from './components/screens/Artists';
import Shop from './components/screens/Shop';
import SignUpForm from './components/SignUpForm';
import userReducer from '../src/reducers';

const store = createStore(userReducer, compose(applyMiddleware(thunk)));

export const AccountStack = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
    title: 'Account',
    headerBackTitle: null,
  },
  SignUpForm: {
    screen: SignUpForm,
    navigationOptions: {
      title: 'Register'
    }
  },
  },
  Tournaments: {
    screen: Tournaments,
    navigationOptions: {
      title: 'Tournaments',
      headerBackTitle: null,
      headerBackButton: null
    },
  },
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login',
      headerBackTitle: null,
      headerBackButton: null
    },
  },
  Artists: {
    screen: Artists,
    navigationOptions: {
      title: 'Artists',
      headerBackTitle: null,
      headerBackButton: null
    },
  }, /*jsj*/
  Shop: {
    screen: Shop,
    navigationOptions: {
      title: 'Shop',
      headerBackTitle: null,
      headerBackButton: null
    },
  },
});
const Tabs = TabNavigator({
  Account: {
      screen: Account,
      navigationOptions: {
          tabBarlabel: Account,
          tabBarIcon: ({ tintColor }) => <Icon
          name="account-circle"
          size={35}
          color={tintColor}
          renderBackButton={() => (null)}
          />
        }
      },
  Tournaments: {
    screen: Tournaments,
    navigationOptions: {
      tabBarLabel: Tournaments,
      tabBarIcon: ({ tintColor }) => <Icon
        name="feed"
        size={35}
        color={tintColor}
        renderBackButton={() => (null)}
      />

    }
 },
 Shop: {
   screen: Shop,
   navigationOptions: {
     tabBarLabel: Shop,
       tabBarIcon: ({ tintColor }) => <Icon
       name="shopping-bag"
       size={35}
       color={tintColor}
       renderBackButton={() => (null)}
       />

   }
 },
 Artists: {
   screen: Artists,
   navigationOptions: {
     tabBarLabel: Artists,
       tabBarIcon: ({ tintColor }) => <Icon
       name="shopping-bag"
       size={35}
       color={tintColor}
       renderBackButton={() => (null)}
       />
   }
}
});

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync: {
  }
});
global.storage = storage;


class App extends Component {
  //lifecyle method for firebase initialization
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAC6YlWV-KmLlnorSkTFSh0I0mo7ZRMIJY',
    authDomain: 'shoejackcity-729f9.firebaseapp.com',
    databaseURL: 'https://shoejackcity-729f9.firebaseio.com',
    projectId: 'shoejackcity-729f9',
    storageBucket: 'shoejackcity-729f9.appspot.com',
    messagingSenderId: '863761628819'
  });
  }

  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}

export default App;
