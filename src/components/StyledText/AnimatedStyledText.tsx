import { Component } from 'react';
import Animated from 'react-native-reanimated';

import StyledText from './StyledText';

import type { AnimatedStyledTextProps } from './types';

class StyledTextWrapper extends Component<AnimatedStyledTextProps> {
  constructor(props: AnimatedStyledTextProps) {
    super(props);
  }
  render() {
    const { textRef, ...props } = this.props;

    return <StyledText ref={textRef} {...props} />;
  }
}

const AnimatedStyledText = Animated.createAnimatedComponent(StyledTextWrapper);

export { AnimatedStyledText };
