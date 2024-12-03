import React from 'react';
// Importing react native components
import {StyleSheet, Text, View} from 'react-native';
// Importing theme file
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
// Importin customized components
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

// Typescript interface for component props
interface HeaderBarProps {
  title?: string;
}

/**
 * @returns Functional Resuable Header component which returns title
 */
const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};
const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
