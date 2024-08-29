import { ColorValue, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors, dimensions } from '@foundation';

import type { Props } from './types';

const MinusIcon = ({ color, size = dimensions[4] }: Props) => {
  return (
    <View style={{ aspectRatio: 1 / 1, width: size }}>
      <Svg fill="none" height="100%" viewBox="0 0 24 24" width="100%">
        <IconPath color={color} />
      </Svg>
    </View>
  );
};

const IconPath = ({
  color = colors.typography.vampireBlack,
}: {
  color?: ColorValue;
}) => {
  return (
    <Path
      d="M6 12h12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
    />
  );
};

export default MinusIcon;
