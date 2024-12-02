import React, {useState} from 'react';
// Importing React Native components
import {Button, StyleSheet, Text, View} from 'react-native';
// Importing External Libraries
// Importing the customized components
import {useStore} from '../store/store';
// Importing util functions
import {getCategoriesFromData} from '../utils';

/**
 * @returns Functional Component returns the Home Page of the App
 */
const HomeScreen = () => {
  const [categories, setCategories] = useState([]); // State to store the Categories
  const [searchText, setSearchText] = useState(undefined); // State for search text input
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  }); // State to store the category index

  // Dispatching the data from the store
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);

  return (
    <View>
      <Text>HomeScreen is the best screen in the entire app</Text>
      <Button title="Welecome"></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
