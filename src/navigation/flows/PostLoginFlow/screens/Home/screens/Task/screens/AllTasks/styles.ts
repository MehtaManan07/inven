import { dimensions } from '@foundation';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  chipWrapper: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  listWrapper: { gap: 12, paddingBottom: 12 },
  wrapper: {
    flex: 1,
    gap: dimensions[3],
    paddingHorizontal: dimensions[5],
    paddingTop: dimensions[5],
  },
});

export default styles;
