import { View } from 'react-native';
import styles from './styles';
import {
  BackWithShaftIcon,
  IconButton,
  OutlinedText,
  PlusIcon,
  TopNavIconButton,
} from '@components';
import { Props } from './types';
import { capitalizeFirstLetter } from '@utils';
import { colors, dimensions } from '@foundation';

const Header = ({ name, onPressPlus, onPressBack }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <TopNavIconButton
          icon={<BackWithShaftIcon size={dimensions[4]} />}
          onPress={onPressBack}
        />
        <OutlinedText>{capitalizeFirstLetter(name)}</OutlinedText>
      </View>
      <IconButton
        icon={<PlusIcon color={colors.common.white} size={16} />}
        size="md"
        onPress={onPressPlus}
      />
    </View>
  );
};

export default Header;
