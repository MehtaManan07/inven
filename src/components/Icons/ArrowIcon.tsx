import { ColorValue, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors, dimensions } from '@foundation';

import type { Props } from './types';

const ArrowIcon = ({ color, size = dimensions[4], strokeWidth = 2 }: Props) => {
  return (
    <View style={{ aspectRatio: 1 / 1, width: size }}>
      <Svg fill="none" height="100%" viewBox="0 0 20 20" width="100%">
        <IconPath color={color} strokeWidth={strokeWidth} />
      </Svg>
    </View>
  );
};

const IconPath = ({
  color = colors.typography.vampireBlack,
  strokeWidth,
}: {
  color?: ColorValue;
  strokeWidth?: number;
}) => {
  return (
    <Path
      d="M7.5 2.5l6.97 6.97a.75.75 0 010 1.06L7.5 17.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  );
};
export default ArrowIcon;
