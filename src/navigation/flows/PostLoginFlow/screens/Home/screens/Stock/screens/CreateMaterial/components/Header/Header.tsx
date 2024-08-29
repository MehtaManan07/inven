import {
  BackWithShaftIcon,
  OutlinedText,
  TopNavIconButton,
} from '@components';
import { dimensions } from '@foundation';
import { View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { CreateCategoryNavigationProp } from '../../types';

const Header = () => {
  const navigation = useNavigation<CreateCategoryNavigationProp>();
  const navigateToPrevScreen = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.wrapper}>
      <TopNavIconButton
        icon={<BackWithShaftIcon size={dimensions[4]} />}
        onPress={navigateToPrevScreen}
      />
      <OutlinedText variant="h2-pro">Add raw material</OutlinedText>
    </View>
  );
};

export default Header;
