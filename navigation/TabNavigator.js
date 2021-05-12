import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {colors} from '../theme/colors';

import { MainStackNavigator, FavoritesStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Meals') {
          iconName = focused ? 'md-restaurant' : 'md-restaurant';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'md-star' : 'md-star';
        }

        // You can return any component that you like here!
        return <Ionicons  name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor:  '#fff',
      inactiveTintColor: 'gray',
      tabStyle:{
        backgroundColor:colors.primary,
      },
      style:{
        height:70
      }
    }}
    >
      <Tab.Screen
        name='Meals'
        component={MainStackNavigator}
      />
      <Tab.Screen name='Favorites' component={FavoritesStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
