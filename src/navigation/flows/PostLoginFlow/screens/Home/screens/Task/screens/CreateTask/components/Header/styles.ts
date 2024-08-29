import { dimensions } from '@foundation';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: dimensions[4],
    justifyContent: 'flex-start',
    paddingBottom: dimensions[3],
  },
});

export default styles;
