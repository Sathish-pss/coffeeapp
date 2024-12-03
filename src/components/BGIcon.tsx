import React from 'react';
// Importing react native components
import {StyleSheet, Text, View} from 'react-native';
// Importing theme files
import {BORDERRADIUS, SPACING} from '../theme/theme';
// Importing Customized Components
import CustomIcon from './CustomIcon';

// Interface props
interface BGIconProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
}

/**
 *
 * @returns Functional Components returns the BGIcon - reusable
 */
const BGIcon: React.FC<BGIconProps> = ({name, color, size, BGColor}) => {
  return (
    <View style={[styles.IconBG, {backgroundColor: BGColor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};
const styles = StyleSheet.create({
  IconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});

export default BGIcon;
