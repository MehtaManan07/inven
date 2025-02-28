import { borderRadii, colors, dimensions } from '@foundation';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  initials: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: colors.monoVariants.chillGrey_2,
    borderRadius: borderRadii.full,
    height: dimensions[10],
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: colors.common.white,
    borderRadius: dimensions[2],
    flexDirection: 'row',
    gap: dimensions[3],
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default styles;
