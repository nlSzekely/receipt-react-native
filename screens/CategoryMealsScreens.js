import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/testData';
import MealItem from '../components/MealItem';

export default function CategoryMealsScreens(props) {
  const { id } = props.route.params;
  const { navigation } = props;
  const filteredMeals = MEALS.filter((meal) => meal.categoryIds.includes(id));

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={filteredMeals}
        renderItem={({ item }) => (
          <MealItem
            title={item.title}
            duration={item.duration}
            onSelectMeal={() => navigation.navigate('MealDetailsScreen', { title: item.title, id: item.id })}
            complexity={item.complexity}
            affordability={item.affordability}
            image={item.imageUrl}
          />
        )}
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
