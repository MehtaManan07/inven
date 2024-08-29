import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Props } from './types';

const TransactionIcon = ({ color, size, strokeWidth = 2, ...props }: Props) => {
  return (
    <View style={{ aspectRatio: 1 / 1, width: size }}>
      <Svg height="100%" viewBox="0 0 24 24" width="100%" {...props}>
        <Path
          d="M2 7h18m-4-5l5 5-5 5m6 5H4m4-5l-5 5 5 5"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </Svg>
    </View>
  );
};

export default TransactionIcon;
