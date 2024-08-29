import { ColorValue, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors, dimensions } from '@foundation';

import type { Props } from './types';

/**
 * @description - A component that renders the *Back with Shaft* icon.
 *
 * @param props.color - Optional prop for setting the color of displayed icon.
 * @param props.size - Size of the square container for icon. Defaults to `16`.
 *
 * @remarks
 *
 * The icon color transitions can be made smooth by not passing the color value to `color`
 * prop. Instead, wrap the icon component sub-tree with `AnimatedIconColorProvider`
 * component (any level above the icon component), create a Reanimated Shared Value (by
 * using the `useSharedValue` or `useDerivedValue` hook at the time of writing) for the
 * color, and passing the shared value to the `colorValue` prop of
 * `AnimatedIconColorProvider`. For example,
 *
 * ```typescript
 * const SomeComponent = () => {
 *    const animatedColor = useDerivedValue(() => {
 *      const grey = '#969696';
 *      const black = '#000000';
 *
 *      return interpolateColor(
 *        disabledAnimation.value,
 *        [0, 1],
 *        [black, grey]
 *      );
 *    });
 *
 *    // The icon will transition from black to grey when disabled.
 *    return (
 *      <AnimatedIconColorProvider colorValue={animatedColor}>
 *        ...
 *          <SearchIcon />
 *        ...
 *      </AnimatedIconColorProvider>
 *    );
 * }
 * ```
 *
 * If the `AnimatedIconColorProvider` component is used at the same time with `color`
 * prop, the latter will take precedence over the former's color value. For example,
 *
 * ```typescript
 * const SomeComponent = () => {
 *    const animatedColor = useDerivedValue(() => {
 *      const grey = '#969696';
 *      const black = '#000000';
 *
 *      return interpolateColor(
 *        disabledAnimation.value,
 *        [0, 1],
 *        [black, grey]
 *      );
 *    });
 *
 *    // The icon will transition from black to grey when disabled.
 *    return (
 *      <AnimatedIconColorProvider colorValue={animatedColor}>
 *        ...
 *          <SearchIcon color="pink" />
 *        ...
 *      </AnimatedIconColorProvider>
 *    );
 * }
 * ```
 *
 * In the above example, the `SearchIcon` icon will be `pink` in color irrespective of
 * the value passed to `colorValue` prop of `AnimatedIconColorProvider` component.
 */
const SearchIcon = ({ color, size = dimensions[4] }: Props) => {
  return (
    <View style={{ aspectRatio: 16 / 16, width: size }}>
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
      clipRule="evenodd"
      d="M7.00001 0.533325C3.79678 0.533325 1.20001 3.13006 1.20001 6.33333C1.20001 9.53659 3.79678 12.1333 7.00001 12.1333C8.31318 12.1333 9.52441 11.6969 10.4966 10.9612L14.101 14.5656C14.4134 14.8781 14.9199 14.8781 15.2324 14.5656C15.5448 14.2532 15.5448 13.7467 15.2324 13.4343L11.628 9.82987C12.3636 8.85769 12.8 7.64647 12.8 6.33333C12.8 3.13007 10.2033 0.533325 7.00001 0.533325ZM2.80001 6.33333C2.80001 4.01372 4.68043 2.13333 7.00001 2.13333C9.31961 2.13333 11.2 4.01372 11.2 6.33333C11.2 8.65293 9.31961 10.5333 7.00001 10.5333C4.68043 10.5333 2.80001 8.65293 2.80001 6.33333Z"
      fill={color}
      fillRule="evenodd"
    />
  );
};

export default SearchIcon;
