/**
 * App's primary navigator. Switches between four sets of screens:
 *  - Loading screen.
 *  - Introduction stack: first-run walkthrough of app features.
 *  - Auth stack: includes signing in and signing up.
 *  - Main app view (AppTabs): main view after sign in.
 */
 
import { SwitchNavigator } from 'react-navigation';

import StartUpScreen from '../screens/StartUpScreen';
import AuthStack from './AuthStack';
import AppTabs from './AppTabs';


export default SwitchNavigator(
  {
    StartUpScreen: {
      screen: StartUpScreen,
    },
    AuthStack: {
      screen: AuthStack,
    },
    AppTabs: {
      screen: AppTabs,
    },
  },
  {
    initialRouteName: 'StartUpScreen',
  }
);
