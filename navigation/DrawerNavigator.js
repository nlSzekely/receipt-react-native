import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet, Text } from "react-native";

import { FavoritesStackNavigator } from './StackNavigator';
import TabNavigator from './TabNavigator';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  >
      <Drawer.Screen
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => <Ionicons name='md-home' size={size} color={focused ? '#7cc' : '#ccc'} />,
        }}

        name='Home'
        component={TabNavigator}
      />
      <Drawer.Screen 
      name='Favorites'  component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
