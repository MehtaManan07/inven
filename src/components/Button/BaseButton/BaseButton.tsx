import { ActivityIndicator, Pressable, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import { AnimatedIconColorProvider } from "@providers";

import { useBouncyButtonAnimation, useDisabledAnimation } from "../shared";
import Show from "../../Show";
import StyledText from "../../StyledText";

import styles from "./styles";

import type { ButtonBackgroundProps, Props } from "./types";
import colorSchemes from "./scheme";

const BaseButton = ({
  icon,
  label,
  testID,
  onPress,
  isDisabled = false,
  isLoading = false,
  size = "lg",
  variant = "blue",
  iconPosition = "left",
  textColor,
  ...props
}: Props) => {
  const { bounceAnimation, extrudeButton, flattenButton } =
    useBouncyButtonAnimation({ isDisabled });

  const disabledAnimation = useDisabledAnimation(isDisabled);

  const textVariant = size === "sm" ? "b1-m" : size === "xs" ? "b2-m" : "h4";
  const colors = colorSchemes[variant];

  const contentWrapperStyle = useAnimatedStyle(() => {
    const bounceFactor = (1 - bounceAnimation.value) / 4;
    return {
      transform: [{ translateX: bounceFactor }, { translateY: bounceFactor }],
    };
  });

  const animatedContentColor = useDerivedValue(() => {
    return interpolateColor(
      disabledAnimation.value,
      [0, 1],
      [colors["contentColor"], colors["disabledContentColor"]]
    );
  });

  const labelStyle = {
    color:
      textColor ?? isDisabled
        ? colors["disabledContentColor"]
        : colors["contentColor"],
  };
  // TODO: Add design-accurate spinner
  const renderedIcon = isLoading ? (
    <ActivityIndicator
      color={colors[isDisabled ? "disabledLoaderColor" : "loaderColor"]}
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
        <Animated.View
          style={[
            styles.row,
            contentWrapperStyle,
            {
              flexDirection: iconPosition === "left" ? "row" : "row-reverse",
              gap: size === "xs" ? 4 : 8,
              paddingHorizontal: size === "xs" ? 8 : 20,
            },
          ]}
        >
          <AnimatedIconColorProvider colorValue={animatedContentColor}>
            {renderedIcon}
          </AnimatedIconColorProvider>
          <StyledText style={labelStyle} variant={textVariant}>
            {label}
          </StyledText>
        </Animated.View>
      </ButtonBackground>
    </Pressable>
  );
};

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

export default BaseButton;
