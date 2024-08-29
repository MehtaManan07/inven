import { borderWidths, colors, dimensions } from '@foundation';
import { Dimensions, StyleSheet } from 'react-native';

const WAVE_HEIGHT = 15;

const styles = StyleSheet.create({
  backgroundCircles: {
    alignSelf: 'center',
    aspectRatio: 1,
    backgroundColor: colors.common.transparent,
    width: Dimensions.get('screen').width - 40,
  },
  footer: {
    backgroundColor: colors.common.white,
    gap: dimensions[4],
    paddingBottom: dimensions[8],
    paddingHorizontal: dimensions[5],
    paddingTop: dimensions[5],
  },
  gapFill: {
    bottom: -1 * borderWidths.thin,
    height: borderWidths.thicker,
    left: 0,
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  metaTextContainer: {
    gap: dimensions[4],
  },
  paginationContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  titleContainer: { alignItems: 'center' },
  wave: {
    height: WAVE_HEIGHT,
    position: 'relative',
    width: '100%',
    zIndex: 1,
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    gap: dimensions[11],
    justifyContent: 'center',
  },
});

export default styles;
