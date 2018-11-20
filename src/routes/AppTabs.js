import React from 'react';
import { TabNavigator, createBottomTabNavigator } from 'react-navigation';
import { TouchableOpacity, Image } from 'react-native';

import ProductsScreen from '../screens/tab/ProductsScreen';

import {
  user_png,
} from '../Assets';


const AppTabs = createBottomTabNavigator({
  ProductsTab: {
    screen: ProductsScreen,
    navigationOptions: {
      title: 'Products',
      tabBarLabel: 'PRODUCTS',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={bill_png.load()}
          style={[{ tintColor: tintColor }]}
        />
      ),
    }
  },
},
{
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    tabStyle: {
      paddingHorizontal: 0,
      backgroundColor: '#063b6d',
    },
    labelStyle: {
      fontSize: 11,
    },
    iconStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    showIcon:true,
    // showLabel: false,
  }
});

const defaultGetStateForAction = AppTabs.router.getStateForAction;

export default AppTabs;
