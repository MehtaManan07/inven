import { colors, dimensions } from '@foundation';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  innerWrapper: { flex: 1, flexDirection: 'row', gap: 8, marginLeft: 52 },
  leftWrapper: {
    flex: 0.3,
    flexDirection: 'column',
    gap: 8,
  },
  rightItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightWrapper: {
    flex: 0.7,
    flexDirection: 'column',
    gap: 8,
  },
  textContainer: {
    paddingLeft: dimensions[12],
  },
  wrapper: {
    backgroundColor: colors.common.white,
    borderRadius: dimensions[2],
    flex: 1,
    gap: dimensions[3],
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default styles;
