import React from 'react';
// Importing react native components
import {StyleSheet, View, Text} from 'react-native';
// Importing External libraries
import LinearGradient from 'react-native-linear-gradient';
// Importing Customized Components
import CustomIcon from './CustomIcon';
// Importing theme files
import {COLORS, SPACING} from '../theme/theme';

// TypeScript Interface props for GradientBGICon component
interface GradientBGIConProps {
  name: string;
  color: string;
  size: number;
}

const GradientBGIcon: React.FC<GradientBGIConProps> = ({name, color, size}) => {
  return (
    <View style={style.Container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={style.LinearGradientBG}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};



const style = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
  },
  LinearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GradientBGIcon;
