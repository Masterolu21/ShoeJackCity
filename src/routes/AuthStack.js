import { StackNavigator } from 'react-navigation';

import SignInScreen from '../screens/auth/SignInScreen';


const AuthStack = new StackNavigator({
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  }
  },
  {
    initialRouteName: 'SignInScreen',
    headerMode: 'none',
    mode: 'card',
  },
);

export default AuthStack;
