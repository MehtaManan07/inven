import { StyleSheet } from 'react-native';

import { borderRadii, dimensions } from '@foundation';

const styles = StyleSheet.create({
  lgWrapper: {
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: borderRadii['full'],
    height: dimensions[8],
    justifyContent: 'center',
  },
  mdWrapper: {
    alignItems: 'center',
    aspectRatio: 1 / 1,
    borderRadius: borderRadii['full'],
    height: dimensions[6],
    justifyContent: 'center',
  },
  smWrapper: {
    alignItems: 'center',
    aspectRatio: 1 / 1,
    borderRadius: borderRadii['full'],
    height: dimensions[4],
    justifyContent: 'center',
  },
  wrapper: {
    aspectRatio: 1 / 1,
    height: dimensions[10],
    justifyContent: 'center',
  },
  xlWrapper: {
    alignItems: 'center',
    aspectRatio: 1,
    borderRadius: borderRadii['full'],
    height: dimensions[11],
    justifyContent: 'center',
  },
});

export default styles;
