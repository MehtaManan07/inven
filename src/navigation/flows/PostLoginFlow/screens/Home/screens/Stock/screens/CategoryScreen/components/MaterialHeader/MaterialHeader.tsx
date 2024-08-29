import { StyledText } from '@components';
import { colors } from '@foundation';
import { capitalizeFirstLetter } from '@utils';
import { View } from 'react-native';
import { Props } from './types';
import styles from './styles';

const MaterialHeader = ({ name, avatar }: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.initials}>
        <StyledText color={colors.typography.vampireBlack} variant="h3">
          {avatar}
        </StyledText>
      </View>
      <StyledText color={colors.typography.vampireBlack} variant="b1-m">
        {capitalizeFirstLetter(name)}
      </StyledText>
    </View>
  );
};

export default MaterialHeader;
