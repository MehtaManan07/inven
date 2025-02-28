import Svg, { Path } from 'react-native-svg';
import { Props } from './types';
import { View } from 'react-native';
const SvgComponent = ({ size, strokeWidth, color, ...props }: Props) => (
  <View style={{ aspectRatio: 1, width: size }}>
    <Svg
      fill="none"
      height={'100%'}
      viewBox="0 -0.5 25 25"
      width={'100%'}
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M9.918 10H7.082A1.57 1.57 0 0 0 5.5 11.556v5.89A1.569 1.569 0 0 0 7.082 19h2.836a1.569 1.569 0 0 0 1.582-1.555v-5.889a1.569 1.569 0 0 0-1.582-1.555ZM9.918 4H7.082A1.54 1.54 0 0 0 5.5 5.495v1.014A1.54 1.54 0 0 0 7.082 8h2.836A1.54 1.54 0 0 0 11.5 6.508V5.494A1.54 1.54 0 0 0 9.918 4ZM15.082 13h2.835a1.57 1.57 0 0 0 1.583-1.555V5.557A1.569 1.569 0 0 0 17.918 4h-2.836A1.57 1.57 0 0 0 13.5 5.557v5.888A1.569 1.569 0 0 0 15.082 13ZM15.082 19h2.835a1.54 1.54 0 0 0 1.583-1.492v-1.014A1.54 1.54 0 0 0 17.918 15h-2.836a1.54 1.54 0 0 0-1.582 1.493v1.013A1.54 1.54 0 0 0 15.082 19Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  </View>
);
export default SvgComponent;
