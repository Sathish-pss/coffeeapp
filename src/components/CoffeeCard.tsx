import React from 'react';
// Importing react native components
import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// Importing External Libraries
import LinearGradient from 'react-native-linear-gradient';
// Importing theme files
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
// Importing Customized Components
import BGIcon from './BGIcon';
import CustomIcon from './CustomIcon';

// Constant to store the card width
const CARD_WIDTH = Dimensions.get('window').width * 0.32;

// Interface for the Coffeecard props
interface CoffeeCardProps {
  name: string;
  id: string;
  index: number;
  type: string;
  rosted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}
/**
 *
 * @returns Functional Reusable Component returns a Card showing Coffee details
 */
const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  rosted,
  imagelink_square,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
  name,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      {/* Background Image for the Card */}
      <ImageBackground
        source={imagelink_square}
        style={styles.CardImageBG}
        resizeMode="cover">
        <View style={styles.CardRatingContainer}>
          <CustomIcon
            name="star"
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>

      {/* Coffee details text */}
      <Text style={styles.CardTitle}>{name}</Text>
      <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
      <View style={styles.CardFooterRow}>
        <Text style={styles.CardPriceCurrency}>
          $ <Text style={styles.CardPrice}>{price.price}</Text>
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name="add"
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// Custom styling
const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  CardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: FONTSIZE.size_14,
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  CardSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
  CardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
  CardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
  },
});

export default CoffeeCard;
