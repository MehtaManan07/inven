import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { colors, dimensions } from '@foundation';

interface Props {
  size?: number;
}

const ErrorInfoIcon = ({ size = dimensions[4] }: Props) => {
  return (
    <View style={{ aspectRatio: 1 / 1, width: size }}>
      <Svg fill="none" viewBox="0 0 16 16">
        <Circle
          cx={8}
          cy={8}
          fill={colors.common.white}
          r={6.3}
          stroke={colors.semantics.cinnamonRed}
          strokeWidth={1.4}
        />
        <Path
          d="M8 7.41v3.635"
          stroke={colors.semantics.cinnamonRed}
          strokeLinecap="round"
          strokeWidth={1.4}
        />
        <Circle
          cx={8}
          cy={5.227}
          fill={colors.semantics.cinnamonRed}
          r={0.7}
          stroke={colors.semantics.cinnamonRed}
          strokeWidth={0.055}
        />
      </Svg>
    </View>
  );
};

export default ErrorInfoIcon;
