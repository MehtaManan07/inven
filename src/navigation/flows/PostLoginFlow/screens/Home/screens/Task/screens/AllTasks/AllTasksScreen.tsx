import { colors } from "@foundation";
import { useFetchTasks } from "@hooks";
import { useCallback, useRef, useState } from "react";
import { Pressable, View } from "react-native";
import styles from "./styles";
import { Header, TaskItem } from "./components";
import { SearchBar, SearchBarRef, StyledText } from "@components";
import { debounce } from "@utils";
import { FlatList } from "react-native-gesture-handler";
import { FilterType, RenderFilterFn } from "./types";
import { useSearchMaterials } from "./hooks";

const AllTasksScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const placeholder = "Search for raw materials";
  const searchBarRef = useRef<SearchBarRef>(null);
  const debouncedSetter = debounce("search-task", setSearchTerm, 200);
  const { data } = useFetchTasks();
  const { searchMaterials } = useSearchMaterials(
    data?.tasks || [],
    searchTerm,
    Array.from(selectedUsers),
    Array.from(selectedTypes)
  );
  const results = searchMaterials();

  const onPressChip = useCallback(
    (type: FilterType, item: string) => {
      const setterFn = type === "task" ? setSelectedTypes : setSelectedUsers;
      const selectedSet = type === "task" ? selectedTypes : selectedUsers;
      const copySet: Set<string> = new Set(selectedSet);
      if (copySet.has(item)) {
        copySet.delete(item);
      } else {
        copySet.add(item);
      }
      setterFn(copySet);
    },
    [selectedTypes, selectedUsers]
  );

  const renderFilterItem: RenderFilterFn = ({ item, type }) => {
    const selectedSet = type === "task" ? selectedTypes : selectedUsers;
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

  return (
    <View style={styles.wrapper}>
      <Header />
      <SearchBar
        ref={searchBarRef}
        placeholder={placeholder}
        onChangeText={debouncedSetter}
      />
      <View style={{ gap: 8 }}>
        <FlatList
          horizontal
          contentContainerStyle={{ gap: 8 }}
          data={data?.taskTypes || []}
          renderItem={({ item }) => renderFilterItem({ item, type: "task" })}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          horizontal
          contentContainerStyle={{ gap: 8 }}
          data={data?.usernames || []}
          renderItem={({ item }) => renderFilterItem({ item, type: "user" })}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.listWrapper}
        data={results}
        renderItem={({ item }) => <TaskItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AllTasksScreen;
