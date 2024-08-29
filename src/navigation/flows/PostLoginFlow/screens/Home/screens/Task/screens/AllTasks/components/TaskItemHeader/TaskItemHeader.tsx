import { ArrowIcon, StyledText } from '@components';
import { colors, dimensions } from '@foundation';
import { capitalizeFirstLetter } from '@utils';
import { View } from 'react-native';
import styles from './styles';
import { Props } from './types';

const TaskItemHeader = ({ name, degrees }: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.initials}>
        <StyledText color={colors.typography.vampireBlack} variant="h3">
          {name.substring(0, 2).toUpperCase()}
        </StyledText>
      </View>
      <View style={styles.textContainer}>
        <StyledText color={colors.typography.vampireBlack} variant="b1-m">
          {capitalizeFirstLetter(name)}
        </StyledText>
      </View>
      <View
        style={{
          transform: [{ rotate: `${degrees}deg` }],
          alignItems: 'flex-end',
        }}
      >
        <ArrowIcon
          color={colors.primary.yaleBlue}
          size={dimensions[5]}
          strokeWidth={2}
        />
      </View>
    </View>
  );
};

export default TaskItemHeader;
