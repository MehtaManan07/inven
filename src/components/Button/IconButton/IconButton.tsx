import { ActivityIndicator, Pressable, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

import { AnimatedIconColorProvider } from "@providers";

import {
  useBouncyButtonAnimation,
  useDisabledAnimation,
} from "../shared/hooks";

import styles from "./styles";
import colorSchemes from "./scheme";

import type { ButtonBackgroundProps, Props } from "./types";
import Show from "../../Show";
import { LinearGradient } from "expo-linear-gradient";
import { innerShadows } from "@foundation";

// TODO: Add story for this component.
const IconButton = ({
  icon,
  testID,
  onPress,
  colorScheme = "blue",
  isDisabled = false,
  isLoading = false,
  size = "md",
  // wrapperStyles
  ...props
}: Props) => {
  const colors = colorSchemes[colorScheme];

  const { bounceAnimation, extrudeButton, flattenButton } =
    useBouncyButtonAnimation({ isDisabled });
  const disabledAnimation = useDisabledAnimation(isDisabled);

  const animatedContentColor = useDerivedValue(() => {
    return interpolateColor(
      disabledAnimation.value,
      [0, 1],
      [colors["contentColor"], colors["disabledContentColor"]]
    );
  });

  const contentWrapperStyle = useAnimatedStyle(() => {
    const shadow = size === "lg" ? innerShadows.md : innerShadows.sm;
    const bounceFactor = (1 - bounceAnimation.value) / 6;

    return {
      transform: [
        { translateX: bounceFactor * shadow.x },
        { translateY: bounceFactor * shadow.y },
      ],
    };
  });

  // TODO: Add design-accurate spinner
  const renderedIcon = isLoading ? (
    <ActivityIndicator
      color={isDisabled ? colors.disabledLoaderColor : colors.loaderColor}
    />
  ) : (
    icon
  );

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      disabled={isDisabled || isLoading}
      testID={testID}
      onPress={onPress}
      onPressIn={flattenButton}
      onPressOut={extrudeButton}
      {...props}
    >
      <ButtonBackground
        disabledColor={colors["disabledBackgroundColor"]}
        gradientColors={colors["backgroundGradientColor"]}
        isDisabled={isDisabled}
        size={size}
      >
        <Animated.View style={contentWrapperStyle}>
          <AnimatedIconColorProvider colorValue={animatedContentColor}>
            {renderedIcon}
          </AnimatedIconColorProvider>
        </Animated.View>
      </ButtonBackground>
    </Pressable>
  );
};

export default IconButton;

const ButtonBackground = ({
  children,
  disabledColor,
  gradientColors,
  isDisabled,
  size,
}: ButtonBackgroundProps) => {
  const disabledWrapperStyle = { backgroundColor: disabledColor };

  return (
    <Show
      when={!isDisabled}
      fallback={
        <View style={[styles[`${size}Wrapper`], disabledWrapperStyle]}>
          {children}
        </View>
      }
    >
      <LinearGradient colors={gradientColors} style={styles[`${size}Wrapper`]}>
        {children}
      </LinearGradient>
    </Show>
  );
};
