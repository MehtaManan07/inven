import { Platform, StyleSheet } from 'react-native';

import { borderRadii, dimensions } from '@foundation';

const styles = StyleSheet.create({
  lgWrapper: {
    alignSelf: 'stretch',
    borderRadius: dimensions[4],
    height: dimensions[13],
  },
  mdWrapper: {
    alignSelf: 'flex-start',
    borderRadius: dimensions[4],
    height: dimensions[11],
  },
  row: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    zIndex: Platform.select({ web: 1 }),
  },
  smWrapper: {
    // alignSelf: 'flex-start',
    alignSelf: 'stretch',
    borderRadius: dimensions[5],
    height: dimensions[9],
  },
  wrapper: {
    // alignItems: 'center',
    borderRadius: borderRadii['md'],
    gap: dimensions[2],
    // height: dimensions[13],
    justifyContent: 'center',
  },
  xsWrapper: {
    alignSelf: 'flex-start',
    borderRadius: dimensions[4],
    height: dimensions[7],
  },
});

export default styles;
