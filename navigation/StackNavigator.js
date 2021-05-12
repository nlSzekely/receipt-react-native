import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

// import Home from '../screens/Home';
// import About from '../screens/About';
// import Contact from '../screens/Contact';
import FavoritesScreen from '../screens/FavoritesScreen'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreens from '../screens/CategoryMealsScreens'
import MealDetailsScreen from '../screens/MealDetailsScreen';

import {colors} from '../theme/colors';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = ({ navigation }) => {
  const options = {
    title: 'Categories',
    headerLeft: () => <Ionicons style={{ marginLeft: 10 }} onPress={() => navigation.toggleDrawer()} name='md-home' size={30} color={'#fff'} />,
  };

  return (
    <Stack.Navigator mode='card' screenOptions={screenOptionStyle}>
      <Stack.Screen  options={options} name='CategoriesScreen' component={CategoriesScreen} />
      <Stack.Screen options={({ route }) => ({ title: route.params.title })} name='CategoryMealsScreens' component={CategoryMealsScreens} />
      <Stack.Screen   options={({ route }) => ({ title: route.params.title, headerRight:()=><Ionicons onPress={()=>alert("Favorite")} style={{marginRight:20}} name='md-star' size={30} color={'red'}/> })}  name='MealDetailsScreen' component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='FavoritesScreen' component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, FavoritesStackNavigator };
