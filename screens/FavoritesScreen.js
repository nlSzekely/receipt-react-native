import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/testData';

export default function FavoritesScreen({navigation}) {

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={MEALS}
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
    paddingHorizontal:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
