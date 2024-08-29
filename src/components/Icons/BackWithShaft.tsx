import { ColorValue, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors, dimensions } from '@foundation';

import type { Props } from './types';


const BackWithShaftIcon = ({
  color = colors.primary.yaleBlue,
  size = dimensions[4],
}: Props) => {
  return (
    <View style={{ aspectRatio: 1 / 1, width: size }}>
      <Svg fill="none" height="100%" viewBox="0 0 16 16" width="100%">
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
      d="M6.222 3.778c-1.627 1.25-2.44 2.046-3.703 3.704 1.266 1.627 2.09 2.423 3.703 3.703M3.482 7.481h10"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
    />
  );
};

export default BackWithShaftIcon;
