import { Pressable, View } from 'react-native';
import styles from './styles';
import { PlusIcon } from '../Icons';
import { IconButton } from '../Button';
import StyledText from '../StyledText';
import Show from '../Show';
import { TextInput } from '../FormInputs';
import { colors, dimensions } from '@foundation';
import { FlatList } from 'react-native-gesture-handler';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { Props, SelectRef } from './types';

const DEFAULT_MAX_HEIGHT = 120;

const Select = forwardRef<SelectRef, Props>(
  (
    {
      data,
      onSelect,
      size,
      allowCustom,
      placeholder,
      value: initialValue,
      textRef,
    },
    ref
  ) => {
    const [value, setValue] = useState(initialValue ?? '');
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const onChange = (text: string) => {
      setValue(text);
      const filteredItems = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults([...filteredItems, ...(allowCustom ? [text] : [])]);
    };
    const isSearchVisible = searchResults.length > 0 && value.length > 0;
    const onPressItem = (item: string) => {
      onSelect(item);
      setValue(item);
      setSearchResults([]);
    };
    useImperativeHandle(
      ref,
      () => {
        return {
          isValid: !!value,
        };
      },
      [value]
    );
    return (
      <View>
        <TextInput
          ref={textRef}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
        <Show when={isSearchVisible}>
          <View style={styles.resultsWrapper}>
            <View
              style={[
                styles.results,
                {
                  maxHeight:
                    size === 'sm' ? DEFAULT_MAX_HEIGHT : DEFAULT_MAX_HEIGHT * 2,
                },
              ]}
            >
              <FlatList
                ItemSeparatorComponent={Divider}
                contentContainerStyle={styles.searchMenuList}
                data={searchResults}
                keyboardShouldPersistTaps="handled"
                renderItem={({ item }) => (
                  <Tile name={item} onPress={() => onPressItem(item)} />
                )}
              />
            </View>
          </View>
        </Show>
      </View>
    );
  }
);
const Divider = () => {
  return <View style={styles.divider} />;
};
const Tile = ({ name, onPress }: { name: string; onPress: () => void }) => {
  return (
    <Pressable style={styles.tile} onPress={onPress}>
      <View style={styles.tileLabelWrapper}>
        <StyledText style={styles.tileLabel} variant="b1-m">
          {name}
        </StyledText>
      </View>
      <IconButton
        icon={<PlusIcon color={colors.common.white} size={dimensions[3]} />}
        size="sm"
      />
    </Pressable>
  );
};
export default Select;
