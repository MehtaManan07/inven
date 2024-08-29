import { View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { borderWidths } from '@foundation';
import styles from './styles';

import type { Props } from './types';

const DEFAULT_BORDER_WIDTH = borderWidths.thicker;

/**
 *
 * TL;DR: Do not use in any other component except `Button`.
 *
 * A modified (code) snapshot of the ShadowView component.
 *
 * Meant for use in Button component only. The implementation of this component is
 * completely based on how the Button component is structured and is meant to support
 * animations in Button.
 *
 * Do not modify its internals for purposes other than supporting any cases related to
 * Button component.
 *
 */
const AnimatedShadowView = ({
  backgroundColor,
  borderColor,
  children,
  shadowOffset,
  style,
  borderRadius,
  ...props
}: Props) => {
  const borderBottomRadiusStyle = {
    borderBottomEndRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomStartRadius: borderRadius,
  };

  const wrapperStyle = useAnimatedStyle(() => {
    return {
      borderRadius,
      backgroundColor: backgroundColor.value,
      borderColor: borderColor.value,
    };
  });

  const brightOverlayStyle = useAnimatedStyle(() => {
    const borderWidth = style?.borderWidth ?? DEFAULT_BORDER_WIDTH;

    /**
     * Border width is reduced from the source offset because the source values are based
     * on Figma which includes border width as well. For example, a box with a border of 2
     * and a shadow offset (Y) value of 10 means that the actual inner shadow is
     * 8 (based on 10 - 2). This is because in Figma, shadows are drawn from the outer
     * edge and inner shadows will overlap with border as well.
     */
    const shadowOffsetX = shadowOffset.value.x - borderWidth;
    const shadowOffsetY = shadowOffset.value.y - borderWidth;

    return {
      backgroundColor: backgroundColor?.value,
      bottom: Math.max(shadowOffsetY, 0),
      right: Math.max(shadowOffsetX, 0),
    };
  });

  return (
    <Animated.View style={[styles.wrapper, style, wrapperStyle]} {...props}>
      {/* Dark overlay */}
      <View style={styles.darkOverlay} />

      {/* Bright overlay */}
      <Animated.View
        style={[
          styles.brightOverlay,
          borderBottomRadiusStyle,
          brightOverlayStyle,
        ]}
      />

      {children}
    </Animated.View>
  );
};

export default AnimatedShadowView;
