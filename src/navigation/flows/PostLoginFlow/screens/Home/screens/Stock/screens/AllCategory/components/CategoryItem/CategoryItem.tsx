import { Pressable, View } from 'react-native';
import type { Props } from './types';
import styles from './styles';
import { StyledText } from '@components';
import { colors } from '@foundation';
import { capitalizeFirstLetter } from '@utils';
import { useNavigation } from '@react-navigation/native';
import { AllCategoryNavigationProp } from '../../types';

const CategoryItem = ({ item }: Props) => {
  const navigation = useNavigation<AllCategoryNavigationProp>();
  const navigateToCategory = () => {
    navigation.navigate('Category', { item: item.id });
  };
  return (
    <Pressable style={styles.wrapper} onPress={navigateToCategory}>
      <View style={styles.initials}>
        <StyledText color={colors.typography.vampireBlack} variant="h3">
          {item.name.substring(0, 2).toUpperCase()}
        </StyledText>
      </View>
      <View style={styles.textContainer}>
        <StyledText color={colors.typography.vampireBlack} variant="b1-m">
          {capitalizeFirstLetter(item.name)}
        </StyledText>
        <View>
          <StyledText color={colors.primary.yaleBlue} variant="b1-m">
            Items: {item.rawMaterials.length}
          </StyledText>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryItem;
