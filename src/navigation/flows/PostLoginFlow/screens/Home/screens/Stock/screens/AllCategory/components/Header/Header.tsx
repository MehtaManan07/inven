import { View } from 'react-native';
import styles from './styles';
import { OutlinedText } from '@components';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <OutlinedText>Raw Materials</OutlinedText>
    </View>
  );
};

export default Header;
