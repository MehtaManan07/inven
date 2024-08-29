import { Pressable, View, ViewStyle } from "react-native";
import { FilterType, Props, RenderFilterFn } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, dimensions } from "@foundation";
import styles from "./styles";
import { CategoryItem, Header } from "./components";
import { useCallback, useMemo, useRef, useState } from "react";
import { debounce } from "@utils";
import { SearchBar, SearchBarRef, StyledText } from "@components";
import { FlatList } from "react-native-gesture-handler";
import { useGetUniqueItems, useSearchMaterials } from "./hooks";
import { useFetchCategories } from "@hooks";

const CategoryScreen = ({ route, navigation }: Props) => {
  const categoryId = route.params.item;
  const { data } = useFetchCategories({
    select: (data) => data.categories,
  });
  const allCategories = useMemo(() => {
    if (!data) return [];
    return data;
  }, [data]);
  const category = allCategories.filter((item) => item.id === categoryId)[0];
  const { top } = useSafeAreaInsets();
  const wrapperStyles: ViewStyle = {
    paddingTop: Math.max(top, dimensions[5]),
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set());
  const [selectedSizes, setSelectedSizes] = useState<Set<string>>(new Set());
  const { searchMaterials } = useSearchMaterials(
    category.rawMaterials,
    searchTerm,
    Array.from(selectedColors),
    Array.from(selectedSizes)
  );
  const results = searchMaterials();
  const { uniqueSizes, uniqueColors } = useGetUniqueItems(
    category.rawMaterials
  );
  const placeholder = "Search for raw materials";
  const searchBarRef = useRef<SearchBarRef>(null);
  const debouncedSetter = debounce("search-raw", setSearchTerm, 200);

  const onPressChip = useCallback(
    (type: FilterType, item: string) => {
      const setterFn = type === "color" ? setSelectedColors : setSelectedSizes;
      const selectedSet = type === "color" ? selectedColors : selectedSizes;
      const copySet: Set<string> = new Set(selectedSet);
      if (copySet.has(item)) {
        copySet.delete(item);
      } else {
        copySet.add(item);
      }
      setterFn(copySet);
    },
    [selectedColors, selectedSizes]
  );

  const renderFilterItem: RenderFilterFn = ({ item, type }) => {
    const selectedSet = type === "color" ? selectedColors : selectedSizes;
    const isSelected = selectedSet.has(item);
    return (
      <Pressable
        style={[
          styles.chipWrapper,
          {
            backgroundColor: !isSelected
              ? colors.common.white
              : colors.background.tidalGreen,
          },
        ]}
        onPress={() => onPressChip(type, item)}
      >
        <StyledText color={colors.primary.yaleBlue} variant="b2-m">
          {item}
        </StyledText>
      </Pressable>
    );
  };

  const onPressPlus = () => {
    navigation.navigate("CreateMaterial", { category: category.name });
  };

  const navigateToPrevScreen = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.wrapper, wrapperStyles]}>
      <Header
        name={category.name}
        onPressBack={navigateToPrevScreen}
        onPressPlus={onPressPlus}
      />
      <SearchBar
        ref={searchBarRef}
        placeholder={placeholder}
        onChangeText={debouncedSetter}
      />
      <View style={{ gap: 8 }}>
        <FlatList
          horizontal
          contentContainerStyle={{ gap: 8 }}
          data={uniqueColors}
          renderItem={({ item }) => renderFilterItem({ item, type: "color" })}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          horizontal
          contentContainerStyle={{ gap: 8 }}
          data={uniqueSizes}
          renderItem={({ item }) => renderFilterItem({ item, type: "size" })}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.listWrapper}
        data={results}
        renderItem={({ index, item }) => (
          <CategoryItem index={index} item={item} />
        )}
      />
    </View>
  );
};

export default CategoryScreen;
