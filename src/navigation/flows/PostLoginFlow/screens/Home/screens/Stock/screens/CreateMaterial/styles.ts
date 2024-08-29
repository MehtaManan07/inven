import { dimensions } from '@foundation';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
  },
  leftInput: { flex: 1,gap: 4, justifyContent: 'center' },
  rightInput: { flex: 1,gap: 4, justifyContent: 'center' },
  scroll: {
    gap: 16,
    paddingBottom: dimensions[3],
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: dimensions[5],
  },
});

export default styles;
