import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { MEALS } from '../data/testData';
console.log("🚀 ~ file: MealDetailsScreen.js ~ line 4 ~ MEALS", MEALS)

export default function CategoriesScreen(props) {
  const id = props.route.params.id;
  const meal = MEALS.find((meal) => meal.id === id);
  const { title, onSelectMeal, duration, complexity, affordability, imageUrl } = meal;
  console.log("🚀 ~ file: MealDetailsScreen.js ~ line 10 ~ CategoriesScreen ~ meal", meal)

  return (
    <View style={styles.screen}>
      <ScrollView>
        
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.details}>
          <Text>{duration}m</Text>
          <Text>{complexity?.toUpperCase()}</Text>
          <Text>{affordability?.toUpperCase()}</Text>
        </View>
        <Text>Ingredients</Text>
        <Text>List of ingerdients..</Text>
        <Text>Steps</Text>
        <Text>List of steps..</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height:200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
});
