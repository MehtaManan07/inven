import { ColorValue, View } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { colors, dimensions } from '@foundation';

import type { Props } from './types';

const EditIcon = ({ color, size = dimensions[4] }: Props) => {
  return (
    <View style={{ aspectRatio: 1 / 1, width: size }}>
      <Svg fill="none" height="100%" viewBox="0 0 16 16" width="100%">
        <G clipPath="url(#a)">
          <IconPath color={color} />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path d="M0 0h16v16H0z" fill="#fff" />
          </ClipPath>
        </Defs>
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
      d="M11.333 2A1.886 1.886 0 0 1 14 4.667l-9 9-3.667 1 1-3.667 9-9Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  );
};

export default EditIcon;
