import { forwardRef } from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import Show from '../../Show';
import StyledText, { AnimatedStyledText } from '../../StyledText';
import TextInput from '../TextInput';
import { ErrorInfoIcon } from '../shared';

import { colors } from '@foundation';
import styles from './styles';

import type { Props } from './types';

const TIMING_CONFIG = {
  duration: 150,
  easing: Easing.inOut(Easing.ease),
};

const TextField = forwardRef<RNTextInput, Props>(
  ({ label, invalidFeedbackText, isInvalid = false, ...props }, ref) => {
    const labelStyle = useAnimatedStyle(() => {
      const color = colors.typography.vampireBlack;
      return label ? { color: withTiming(color, TIMING_CONFIG) } : {};
    });

    const isFeedbackVisible = isInvalid && !!invalidFeedbackText;
    const feedbackStyle = useAnimatedStyle(() => {
      return { opacity: withTiming(isInvalid ? 1 : 0) };
    });

    return (
      <View style={styles.wrapper}>
        <Show when={!!label}>
          <AnimatedStyledText style={labelStyle} variant="b2-m">
            {label}
          </AnimatedStyledText>
        </Show>
        <TextInput ref={ref} isInvalid={isInvalid} {...props} />
        <Show when={isFeedbackVisible}>
          <Animated.View style={[styles.errorStack, feedbackStyle]}>
            <ErrorInfoIcon />
            <StyledText style={styles.feedbackText} variant="b2-m">
              {invalidFeedbackText}
            </StyledText>
          </Animated.View>
        </Show>
      </View>
    );
  }
);

export default TextField;
