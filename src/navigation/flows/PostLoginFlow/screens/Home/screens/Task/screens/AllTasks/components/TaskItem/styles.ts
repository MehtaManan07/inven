import { colors, dimensions } from '@foundation';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  accordianHeader: {
    color: colors.primary.yaleBlue,
    marginBottom: 6,
  },
  accordianView: {
    backgroundColor: colors.common.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  onyxText: {
    color: colors.typography.onyx,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 2
  },

  wrapper: {
    backgroundColor: colors.common.white,
    borderRadius: dimensions[2],
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default styles;
