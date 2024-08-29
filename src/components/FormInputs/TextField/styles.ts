import { StyleSheet } from 'react-native';

import { colors, dimensions } from '@foundation';

const styles = StyleSheet.create({
  errorStack: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: dimensions[1],
    paddingRight: 20,
  },
  feedbackText: { color: colors.semantics.cinnamonRed },
  wrapper: {
    gap: dimensions[2],
    width: '100%',
  },
});

export default styles;
