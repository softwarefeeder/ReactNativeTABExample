//This is an example of React Native Tab
import React from 'react';

import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
 
import FirstTab from './tabscreens/FirstTab';
import SecondTab from './tabscreens/SecondTab';
import ThirdTab from './tabscreens/ThirdTab';



//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
const TabScreen = createMaterialTopTabNavigator(
  {
    TAB1: { screen: FirstTab },
    TAB2: { screen: SecondTab },
    TAB3:{screen:ThirdTab}
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#F44336',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#F44336',
        borderBottomWidth: 2,
      },
    },
  }
);
 
//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F44336',
      },
      headerTintColor: '#FFFFFF',
      title: 'ReactNativeTabExample',
    },
  },
});

export default createAppContainer(App);