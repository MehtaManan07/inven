import { View } from 'react-native';
import styles from './styles';
import { IconButton, OutlinedText, PlusIcon } from '@components';
import { colors } from '@foundation';
import { useNavigation } from '@react-navigation/native';
import { AllTasksNavigationProp } from '../../types';

const Header = () => {
  const navigation = useNavigation<AllTasksNavigationProp>();

  const onPressPlus = () => {
    navigation.navigate('CreateTask');
  };
  return (
    <View style={styles.wrapper}>
      <OutlinedText>All tasks</OutlinedText>
      <IconButton
        icon={<PlusIcon color={colors.common.white} size={16} />}
        size="md"
        onPress={onPressPlus}
      />
    </View>
  );
};

export default Header;
