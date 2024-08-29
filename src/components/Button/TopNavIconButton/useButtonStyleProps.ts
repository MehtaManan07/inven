import type { ColorValue } from 'react-native';
import {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import { useDisabledAnimation } from '../shared';

import { colors, innerShadows } from '@foundation';

import type { ButtonSize } from './types';

type Params = {
  backgroundColor: ColorValue;
  bounceAnimation: SharedValue<number>;
  contentColor: ColorValue;
  disabledBackgroundColor: ColorValue;
  isDisabled: boolean;
  pressedBackgroundColor: ColorValue;
  showShadow?: boolean;
  size: ButtonSize;
};

const useButtonStyleProps = ({
  backgroundColor,
  bounceAnimation,
  contentColor,
  disabledBackgroundColor,
  isDisabled,
  pressedBackgroundColor,
  showShadow = true,
  size,
}: Params) => {
  const disabledAnimation = useDisabledAnimation(isDisabled);

  const animatedBackgroundColor = useDerivedValue(() => {
    let animatedBackground = interpolateColor(
      bounceAnimation.value,
      [0, 1],
      [pressedBackgroundColor as string, backgroundColor as string]
    );

    if (isDisabled) {
      animatedBackground = interpolateColor(
        disabledAnimation.value,
        [0, 1],
        [backgroundColor as string, disabledBackgroundColor as string]
      );
    }

    return animatedBackground;
  });

  const animatedBorderColor = useDerivedValue(() => {
    const color = interpolateColor(
      disabledAnimation.value,
      [0, 1],
      [colors.common.black, colors.typography.onyx]
    );

    return color;
  });
  const shadow = size === 'lg' ? innerShadows.md : innerShadows.sm;
  const animatedShadowOffset = useDerivedValue(() => {
    const factor = bounceAnimation.value;
    return {
      x: showShadow ? factor * shadow.x : 0,
      y: showShadow ? factor * shadow.y : 0,
    };
  });

  const contentWrapperStyle = useAnimatedStyle(() => {
    const bounceFactor = (1 - bounceAnimation.value) / 6;

    return {
      transform: [
        { translateX: bounceFactor * shadow.x },
        { translateY: bounceFactor * shadow.y },
      ],
    };
  });

  const animatedContentColor = useDerivedValue(() => {
    return interpolateColor(
      disabledAnimation.value,
      [0, 1],
      [contentColor as string, colors.typography.tDisabled]
    );
  });
  return {
    animatedBackgroundColor,
    animatedBorderColor,
    animatedContentColor,
    animatedShadowOffset,
    contentWrapperStyle,
  };
};

export default useButtonStyleProps;
