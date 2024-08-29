import { TextInput as RNTextInput, View } from 'react-native';
import styles from './styles';
import { useRef, useState } from 'react';
import {
  IconButton,
  PlusIcon,
  MinusIcon,
  Select,
  TextInput,
  StyledText,
} from '@components';
import { useFetchRawMaterials } from '@hooks';
import { colors, dimensions } from '@foundation';
import { Props } from './types';
import Toast from 'react-native-toast-message';

const RawMaterialInput = ({ onPressPlus, icon, value }: Props) => {
  const materialRef = useRef<RNTextInput>(null);
  const quantityRef = useRef<RNTextInput>(null);
  const showPlus = icon === 'plus';
  const [localMaterial, setLocalMaterial] = useState({
    materialId: '0',
    quantityUsed: '0',
    label: '',
  });
  const { data: rawMaterials } = useFetchRawMaterials({
    select: (data) => data.data,
  });

  const names =
    rawMaterials?.map((material) => `${material.name} ${material.size}`) || [];
  const handleStateChange = (key: string, value: string) => {
    const material = rawMaterials?.find(
      (material) => material.id.toString() === value
    );
    const isChangingId = key === 'materialId';
    const name = `${material?.name} ${material?.size}`;
    setLocalMaterial((prev) => ({
      ...prev,
      ...(isChangingId ? { label: name } : {}),
      [key]: value,
    }));
  };
  const pressPlus = () => {
    if (
      (!localMaterial.materialId || !localMaterial.quantityUsed) &&
      showPlus
    ) {
      Toast.show({
        type: 'warningToast',
        text1: 'Please fill all the fields',
      });
      return;
    }
    onPressPlus(localMaterial);
    materialRef.current?.clear();
    quantityRef.current?.clear();
  };
  return (
    <View style={styles.materialWrapper}>
      <View style={{ flex: 1, gap: 8 }}>
        <StyledText variant="b2-m">Name</StyledText>

        <Select
          data={names}
          placeholder="mdf sheets"
          size="sm"
          textRef={materialRef}
          value={value ? value.label : undefined}
          onSelect={(text) =>
            handleStateChange(
              'materialId',
              rawMaterials
                ?.filter((material) => {
                  const name = `${material.name} ${material.size}`;
                  const condition = name === text;
                  return condition;
                })[0]
                .id.toString() ?? '-1'
            )
          }
        />
      </View>
      <View style={{ flex: 0.5, gap: 4 }}>
        <StyledText variant="b2-m">Total weight</StyledText>
        <TextInput
          ref={quantityRef}
          keyboardType="numeric"
          placeholder="50"
          value={value ? value.quantityUsed.toString() : undefined}
          onChangeText={(text) => handleStateChange('quantityUsed', text)}
        />
      </View>
      <IconButton
        colorScheme={showPlus ? 'blue' : 'red'}
        size="md"
        icon={
          icon === 'plus' ? (
            <PlusIcon color={colors.common.white} size={dimensions[4]} />
          ) : (
            <MinusIcon color={colors.common.white} size={dimensions[4]} />
          )
        }
        onPress={pressPlus}
      />
    </View>
  );
};

export default RawMaterialInput;
