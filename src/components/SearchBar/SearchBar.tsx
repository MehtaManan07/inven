import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { SearchIcon } from '../Icons';

import styles from './styles';
import { colors, dimensions } from '@foundation';

import type {
  Props,
  SearchBarRef,
  TextInputRef,
  TextInputWithCrossProps,
} from './types';
import FastImage from 'react-native-fast-image';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SearchBar = forwardRef<SearchBarRef, Props>(
  ({ onBlur, onChangeText, onFocus, disabled = false, ...props }, ref) => {
    const focusAnimation = useSharedValue(0);
    const wrapperStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          focusAnimation.value,
          [0, 1],
          [colors.common.white, colors.primary.blueShadesBlue_10]
        ),
        borderColor: interpolateColor(
          focusAnimation.value,
          [0, 1],
          [colors.divider.dividerBlueDiv, colors.primary.yaleBlue]
        ),
        borderWidth: 1.6,
      };
    });

    const textInputRef = useRef<TextInput | null>(null);
    const focusInput = () => {
      textInputRef.current?.focus();
    };
    const clearText = () => {
      textInputRef.current?.clear();
      if (onChangeText) {
        onChangeText('');
      }
    };

    const focusHandler = (
      event: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
      focusAnimation.value = withTiming(1);
      if (onFocus) {
        onFocus(event);
      }
    };
    const blurHandler = (
      event: NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
      if (onBlur) {
        onBlur(event);
      }
      focusAnimation.value = withTiming(0);
    };

    useImperativeHandle(
      ref,
      () => ({
        blur: () => {
          textInputRef.current?.blur();
        },
        focus: () => {
          textInputRef.current?.focus();
        },
        clear: () => {
          textInputRef.current?.clear();
          if (onChangeText) {
            onChangeText('');
          }
        },
      }),
      [onChangeText]
    );

    return (
      <AnimatedPressable
        disabled={disabled}
        style={[styles.wrapper, wrapperStyle]}
        onPress={focusInput}
      >
        <SearchIcon color={colors.typography.onyx} size={dimensions[4]} />
        <TextInputWithCross
          ref={textInputRef}
          disabled={disabled}
          focusAnimation={focusAnimation}
          onBlur={blurHandler}
          onChangeText={onChangeText}
          onCrossPress={clearText}
          onFocus={focusHandler}
          {...props}
        />
      </AnimatedPressable>
    );
  }
);

const TextInputWithCross = forwardRef<TextInputRef, TextInputWithCrossProps>(
  (
    { value, onChangeText, onCrossPress, disabled, focusAnimation, ...props },
    ref
  ) => {
    const [isNotEmpty, setIsNotEmpty] = useState((value?.length ?? 0) > 0);
    const crossPressHandler = () => {
      if (onCrossPress) {
        onCrossPress();
      }

      setIsNotEmpty(false);
    };

    const textInputRef = useRef<TextInput>(null);
    useImperativeHandle(
      ref,
      () => ({
        blur: () => {
          textInputRef.current?.blur();
        },
        focus: () => {
          textInputRef.current?.focus();
        },
        clear: () => {
          textInputRef.current?.clear();
          setIsNotEmpty(false);
        },
      }),
      []
    );

    const renderedCrossIcon = isNotEmpty ? (
      <Pressable onPress={crossPressHandler}>
        <FastImage
          source={require('@assets/common/cross-circle.webp')}
          style={{ aspectRatio: 1, height: dimensions[5] }}
        />
      </Pressable>
    ) : null;

    const textChangeHandler = (textValue: string) => {
      if (onChangeText) {
        onChangeText(textValue);
      }

      const isTextNotEmpty = textValue.length > 0;
      setIsNotEmpty(isTextNotEmpty);
    };
    const wrapperStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          focusAnimation.value,
          [0, 1],
          [colors.common.white, colors.primary.blueShadesBlue_10]
        ),
      };
    });

    return (
      <Animated.View style={[styles.inputWrapper, wrapperStyle]}>
        <TextInput
          ref={textInputRef}
          blurOnSubmit
          cursorColor={colors.primary.yaleBlue}
          editable={!disabled}
          placeholderTextColor={colors.typography.tDisabled}
          style={styles.input}
          value={value}
          onChangeText={textChangeHandler}
          {...props}
        />
        {renderedCrossIcon}
      </Animated.View>
    );
  }
);

export default SearchBar;
