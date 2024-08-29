import { StyledText } from '@components';
import { capitalizeFirstLetter } from '@utils';

import { useNavigation } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import { useMemo } from 'react';

import { CategoryNavigationProp } from '../../types';
import styles from './styles';
import type { Props } from './types';
import MaterialHeader from '../MaterialHeader';
import StaticChip from '../StaticChip';

const CategoryItem = ({ item }: Props) => {
  const { color, size, availableUnits, totalWeight, weightPerUnit } =
    item;
  const gramToKg = (grams: number) => {
    const kilograms = grams / 1000;
    return parseFloat(kilograms.toFixed(2)) + ' kg';
  };

  const navigation = useNavigation<CategoryNavigationProp>();
  const navigateToCategory = () => {
    navigation.navigate('CreateMaterial', { category: item.name });
  };
  const avatar = useMemo(() => {
    const words = item.name.split(' ');

    if (words.length > 1) {
      return (
        capitalizeFirstLetter(words[0].charAt(0)) +
        capitalizeFirstLetter(words[1].charAt(0))
      );
    }
    return capitalizeFirstLetter(words[0].charAt(0));
  }, [item.name]);

  return (
    <Pressable style={styles.wrapper} onPress={navigateToCategory}>
      <MaterialHeader avatar={avatar} name={item.name} />
      <View style={styles.innerWrapper}>
        <View style={styles.leftWrapper}>
          <StaticChip text={size} />
          <StaticChip text={`${color}`} />
        </View>
        <View style={styles.rightWrapper}>
          <View style={styles.rightItem}>
            <StyledText>Units available:</StyledText>
            <StaticChip text={`${availableUnits} pkt`} />
          </View>
          <View style={styles.rightItem}>
            <StyledText>Weight per unit:</StyledText>
            <StaticChip text={gramToKg(weightPerUnit)} />
          </View>
          <View style={styles.rightItem}>
            <StyledText>Total weight:</StyledText>
            <StaticChip text={gramToKg(totalWeight)} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryItem;
