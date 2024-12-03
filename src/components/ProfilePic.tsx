import React from 'react';
// Importing react native components
import {StyleSheet, Image, View} from 'react-native';
// Importing theme files
import {COLORS, SPACING} from '../theme/theme';


/**
 * 
 * @returns Functional Component returns the Profile Picture component
 */
const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;
