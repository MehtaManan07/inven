import { colors, borderRadii, dimensions } from '@foundation';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    aspectRatio: 1 / 1,
    width: dimensions[8],
  },
  label: {
    color: colors.typography.vampireBlack,
  },
  successWrapper: {
    alignItems: 'center',

    backgroundColor: colors.common.white,
    borderRadius: borderRadii.sm,
    elevation: 4,
    flexDirection: 'row',

    gap: dimensions[3],
    marginHorizontal: dimensions[4],
    paddingHorizontal: dimensions[4],
    paddingVertical: dimensions[4],
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: Dimensions.get('window').width - dimensions[8],
  },
});

export default styles;
