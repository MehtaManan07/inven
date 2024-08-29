import { forwardRef, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  TextInput as RNTextInput,
  TextInputFocusEventData,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import variants, { State } from '../variants';

import styles from './styles';
import { borderWidths } from '@foundation';

import type { Props } from './types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);

const TIMING_CONFIG = {
  duration: 150,
  easing: Easing.inOut(Easing.ease),
};

// TODO: Use RawInput inside to remove duplicate code.
const TextInput = forwardRef<RNTextInput, Props>(
  (
    {
      icon,
      style,
      iconPosition = 'left',
      isInvalid = false,
      variant = 'experimental',
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<RNTextInput | null>(null);
    const focusInput = () => {
      if (ref && typeof ref !== 'function') {
        ref.current?.focus();
      } else if (inputRef.current) {
        inputRef.current.focus();
      }

      setIsFocused(true);
    };
    const blurInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    };

    const focusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      focusInput();
      if (onFocus) {
        onFocus(e);
      }
    };

    let inputState: State = 'default';
    if (isInvalid) {
      inputState = 'invalid';
    } else if (isFocused) {
      inputState = 'focused';
    }

    const {
      backgroundColor,
      borderColor,
      placeholderColor,
      color: textColor,
    } = variants[variant][inputState];

    const wrapperStyle = useAnimatedStyle(() => {
      let borderWidth: number = borderWidths['normal'];
      if (isInvalid || isFocused) {
        borderWidth = borderWidths['thick'];
      }

      return {
        borderWidth: withTiming(borderWidth, TIMING_CONFIG),
        backgroundColor: withTiming(backgroundColor, TIMING_CONFIG),
        borderColor: withTiming(borderColor, TIMING_CONFIG),
        flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
      };
    });

    const textInputStyle = useAnimatedStyle(() => {
      return { color: withTiming(textColor, TIMING_CONFIG) };
    });

    return (
      <AnimatedPressable
        style={[
          styles.wrapper,
          variant === 'experimental' ? styles.experimentalWrapper : null,
          wrapperStyle,
          style,
        ]}
        onPress={focusInput}
      >
        {icon}
        <AnimatedTextInput
          ref={ref ?? inputRef}
          cursorColor={borderColor}
          placeholderTextColor={placeholderColor}
          style={[styles.input, textInputStyle]}
          onBlur={blurInput}
          onFocus={focusHandler}
          onPressOut={focusInput}
          {...props}
        />
      </AnimatedPressable>
    );
  }
);

export default TextInput;
