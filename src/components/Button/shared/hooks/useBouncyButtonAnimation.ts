import { useEffect } from 'react';
import {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

/**
 * @description Returns a value varying between 0 to 1. 0 represents that the button is
 * **Flat** while 1 represents that the button is **Extruded**.
 */
const useBouncyButtonAnimation = ({ isDisabled }: { isDisabled: boolean }) => {
  const bounceAnimation = useSharedValue(0);

  // To show etruding animation as soon as button is mounted on the screen.
  useEffect(() => {
    if (isDisabled) {
      bounceAnimation.value = withTiming(0, { duration: 100 });
    } else {
      bounceAnimation.value = withSpring(1, { velocity: 8 });
    }
  }, [bounceAnimation, isDisabled]);

  /** Transitions the bounce animation value to 1. */
  const extrudeButton = () => {
    bounceAnimation.value = withSpring(1, { velocity: 8 });
  };

  /** Transitions the bounce animation value to 0. */
  const flattenButton = () => {
    bounceAnimation.value = withTiming(0, { duration: 100 });
  };

  return { bounceAnimation, extrudeButton, flattenButton };
};

export default useBouncyButtonAnimation;
