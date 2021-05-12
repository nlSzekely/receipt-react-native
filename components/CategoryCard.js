import React from 'react';
import { Text, StyleSheet, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

export default function CategoriesScreen(props) {
  const { onSelect, title, color } = props;
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComp onPress={onSelect}>
        <View style={{ ...styles.container, backgroundColor: color }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableComp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
    borderRadius: 10,
    elevation: 10,

    overflow:'hidden'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
});
