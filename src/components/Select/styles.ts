import { colors, dimensions, stroke } from '@foundation';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  divider: {
    backgroundColor: colors.divider.dividerWhiteDiv,
    height: stroke['md'],
    width: '100%',
  },
  results: {
    backgroundColor: colors.common.white,
    borderColor: colors.divider.dividerWhiteDiv,
    borderRadius: 12,
    borderWidth: 1.2,
    paddingVertical: dimensions[1],
  },
  resultsWrapper: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 44,
    zIndex: 2,
  },
  searchMenuList: {
    paddingHorizontal: dimensions[4],
    paddingVertical: dimensions[1],
  },
  tile: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: dimensions[3],
  },
  tileLabel: { color: colors.typography.vampireBlack },
  tileLabelWrapper: { flex: 1 },
});

export default styles;
