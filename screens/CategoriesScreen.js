import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/testData';
import CategoryCard from '../components/CategoryCard';

export default function CategoriesScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            color={item.color}
            title={item.title}
            onSelect={() => navigation.navigate('CategoryMealsScreens', { title: item.title, id: item.id })}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // padding:20
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    height: 150,
    marginLeft: 15,
  },
});
