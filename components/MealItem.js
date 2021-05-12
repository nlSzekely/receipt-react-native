import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function MealItem(props) {
  const { title, onSelectMeal, duration, complexity, affordability, image } = props;
  return (
    <TouchableOpacity style={styles.mealItem} onPress={onSelectMeal}>
      <View>
        <View style={[styles.mealRow, styles.mealHeader]}>
          <ImageBackground source={{ uri: image }} style={styles.bgImage}>
            <Text style={styles.title}>{title}</Text>
          </ImageBackground>
        </View>
        <View style={[styles.mealRow, styles.mealDetails]}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    marginVertical:10,
    borderRadius:7,
    overflow:'hidden'
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '80%',
  },
  mealDetails: {
    height: '20%',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent:'flex-end'
  },
  title: {
    fontFamily: 'open-sans',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.4)',
    fontSize: 22,
    paddingVertical:5,
    textAlign:'center'
  },
});
