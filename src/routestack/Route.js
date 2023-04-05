//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/OnBoarding/Onboarding';
import Homescreen from '../screens/HomePage/Homescreen';
import Createquote from '../screens/CreateQuote/Createquote';
import Tp from '../screens/Tp';



const Stack = createNativeStackNavigator();

const screens = [
 
  {
    name: 'Createquote',
    component: Createquote,
  },
  
  {
    name: 'Tp',
    component: Tp,
  },
  
  {
    name: 'Onboarding',
    component: Onboarding,
  },
  {
    name: 'Homescreen',
    component: Homescreen,
  },
];

class Route extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {screens.map(item => (
            <Stack.Screen name={item.name} component={item.component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}CustomColor

export default Route;
