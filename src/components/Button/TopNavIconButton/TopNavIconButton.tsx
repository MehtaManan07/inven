import { ActivityIndicator, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';

import { AnimatedShadowView } from '../shared/components';

import { AnimatedIconColorProvider } from '@providers';

import { useBouncyButtonAnimation } from '../shared/hooks';
import useButtonStyleProps from './useButtonStyleProps';

import styles from './styles';
import colorSchemes from './colorSchemes';
import { borderRadii } from '@foundation';

import type { Props } from './types';

// TODO: Add story for this component.
const IconButton = ({
  icon,
  testID,
  onPress,
  colorScheme = 'white',
  isDisabled = false,
  isLoading = false,
  size = 'md',
  showShadow = true,
  ...props
}: Props) => {
  const colors = colorSchemes[colorScheme];

  const { bounceAnimation, extrudeButton, flattenButton } =
    useBouncyButtonAnimation({ isDisabled });

  const {
    animatedBackgroundColor,
    animatedBorderColor,
    animatedContentColor,
    animatedShadowOffset,
    contentWrapperStyle,
  } = useButtonStyleProps({
    bounceAnimation,
    isDisabled,
    size,
    showShadow,
    contentColor: colors.contentColor,
    backgroundColor: colors.backgroundColor,
    disabledBackgroundColor: colors.disabledBackgroundColor,
    pressedBackgroundColor: colors.pressedBackgroundColor,
  });

  // TODO: Add design-accurate spinner
  const renderedIcon = isLoading ? (
    <ActivityIndicator color={colors.contentColor} />
  ) : (
    icon
  );
  const disabledStyles = {
    borderColor: colors.disabledBorderColor,
  };

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      disabled={isDisabled || isLoading}
      testID={testID}
      style={[
        styles.wrapper,
        styles[`${size}Wrapper`],
        isDisabled ? disabledStyles : null,
      ]}
      onPress={onPress}
      onPressIn={flattenButton}
      onPressOut={extrudeButton}
      {...props}
    >
      <AnimatedShadowView
        backgroundColor={animatedBackgroundColor}
        borderColor={animatedBorderColor}
        borderRadius={borderRadii.full}
        shadowOffset={animatedShadowOffset}
        style={styles[`${size}ShadowView`]}
      >
        {/* Button contents */}
        <Animated.View style={contentWrapperStyle}>
          <AnimatedIconColorProvider colorValue={animatedContentColor}>
            {renderedIcon}
          </AnimatedIconColorProvider>
        </Animated.View>
      </AnimatedShadowView>
    </Pressable>
  );
};

export default IconButton;
