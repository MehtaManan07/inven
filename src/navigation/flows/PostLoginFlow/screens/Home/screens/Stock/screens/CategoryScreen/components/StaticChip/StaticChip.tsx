import { StyledText } from '@components';
import { colors } from '@foundation';
import { View } from 'react-native';
import styles from './styles';

const StaticChip = ({ text }: { text: string }) => {
  return (
    <View style={styles.wrapper}>
      <StyledText color={colors.typography.vampireBlack} variant="b2-m">
        {text}
      </StyledText>
    </View>
  );
};

export default StaticChip;
