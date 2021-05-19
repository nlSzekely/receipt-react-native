import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

// import Home from '../screens/Home';
// import About from '../screens/About';
// import Contact from '../screens/Contact';
import FavoritesScreen from '../screens/FavoritesScreen';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreens from '../screens/CategoryMealsScreens';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FiltersScreen from '../screens/FiltersScreen';

import { colors } from '../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../store/actions';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const options = (title, navigation) => {
  return {
    title: title,
    headerLeft: () => (
      <Ionicons style={{ marginLeft: 10 }} onPress={() => navigation.toggleDrawer()} name='md-menu' size={30} color={'#fff'} />
    ),
  };
};

const MainStackNavigator = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const favoriteMeals = useSelector((state) => state.mealState.favoriteMeals);
  console.log('🚀 ~ file: StackNavigator.js ~ line 41 ~ MainStackNavigator ~ favoriteMeals', favoriteMeals);
  return (
    <Stack.Navigator mode='card' screenOptions={screenOptionStyle}>
      <Stack.Screen options={options('Meal Categories', navigation)} name='CategoriesScreen' component={CategoriesScreen} />
      <Stack.Screen options={({ route }) => ({ title: route.params.title })} name='CategoryMealsScreens' component={CategoryMealsScreens} />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <Ionicons
              onPress={() => dispatch(toggleFavorites(route.params.id))}
              style={{ marginRight: 20 }}
              name='md-star'
              size={30}
              color={favoriteMeals.find((meal) => meal.id === route.params.id) ? '#fff' : 'gray'}
            />
          ),
        })}
        name='MealDetailsScreen'
        component={MealDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const FavoritesStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={options('Your Favorites', navigation)} name='FavoritesScreen' component={FavoritesScreen} />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <Ionicons onPress={() => alert('Favorite')} style={{ marginRight: 20 }} name='md-star' size={30} color={'red'} />
          ),
        })}
        name='MealDetailsScreen'
        component={MealDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const FilterStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={options('Filter Meals', navigation)} name='FiltersScreen' component={FiltersScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, FavoritesStackNavigator, FilterStackNavigator };
