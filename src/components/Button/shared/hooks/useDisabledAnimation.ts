import { useEffect } from 'react';
import {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const useDisabledAnimation = (isDisabled: boolean) => {
  const disabledAnimation = useSharedValue(0);

  useEffect(() => {
    if (isDisabled) {
      disabledAnimation.value = withTiming(1, { duration: 100 });
    } else {
      disabledAnimation.value = withSpring(0, { velocity: 8 });
    }
  }, [disabledAnimation, isDisabled]);

  return disabledAnimation;
};

export default useDisabledAnimation;
