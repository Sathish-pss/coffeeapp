import React, {useState} from 'react';
// Importing React Native components
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
// Importing External Libraries
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
// Importing the customized components
import {useStore} from '../store/store';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
// Importing util functions
import {getCategoriesFromData, getCoffeeList} from '../utils';
// Importing theme files
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {TextInput} from 'react-native-gesture-handler';

/**
 * @returns Functional Component returns the Home Page of the App
 */
const HomeScreen = () => {
  // Dispatching the data from the store
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  ); // State to store the Categories
  const [searchText, setSearchText] = useState(''); // State for search text input
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  }); // State to store the category index
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  ); // State to store the sorted coffee

  // Constant holds the react native bottom tab bar height
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.ScreenContainer}>
      {/* Status bar which shows the android/ios battery information, time and network */}
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {/* Scroll View Component => Scrollable when content exceeds */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* Rendering the App header here  */}
        <HeaderBar />

        {/* Title text */}
        <Text style={styles.ScreenTitle}>
          Find the best{'\n'}coffee for you
        </Text>

        {/* Searchable Input box */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon
              style={styles.InputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText?.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find your coffee"
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});

export default HomeScreen;
