import { borderRadii, colors, dimensions } from '@foundation';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: dimensions[3],
  },
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
    justifyContent: 'space-between',
  },
});

export default styles;
