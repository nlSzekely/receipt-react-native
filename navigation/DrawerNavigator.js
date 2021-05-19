import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import { Ionicons } from '@expo/vector-icons';
import { FilterStackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{
          title: 'Meals',
          drawerIcon: ({ focused, size }) => <Ionicons name='md-restaurant' size={size} color={focused ? '#7cc' : '#ccc'} />,
        }}
        name='Home'
        component={TabNavigator}
      />
      <Drawer.Screen
        options={{
          title: 'Filters',
          drawerIcon: ({ focused, size }) => <Ionicons name='md-options' size={size} color={focused ? '#7cc' : '#ccc'} />,
        }}
        name='Filters'
        component={FilterStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
