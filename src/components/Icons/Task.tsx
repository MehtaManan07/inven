import Svg, { Path } from 'react-native-svg';
import { Props } from './types';
import { View } from 'react-native';
const SvgComponent = ({ color, size, ...props }: Props) => (
  <View style={{ aspectRatio: 1, width: size }}>
    <Svg
      fill="none"
      height={'100%'}
      viewBox="0 0 24 24"
      width={'100%'}
      {...props}
    >
      <Path
        d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v6.772a6.471 6.471 0 0 0-1.5-.709V5.25a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h6.063c.173.534.412 1.037.709 1.5H5.25A2.25 2.25 0 0 1 3 18.75V5.25Z"
        fill={color}
      />
      <Path
        d="M10.78 7.72a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47 1.47-1.47a.75.75 0 0 1 1.06 0ZM10.78 13.22a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47a.75.75 0 0 1 1.06 0ZM17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm.501 8.503V18h2.502a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1h2.505v2.503a.5.5 0 1 0 1 0ZM13.25 8.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
        fill={color}
      />
    </Svg>
  </View>
);
export default SvgComponent;
