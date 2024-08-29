import { dimensions } from "@foundation";

import { View, ViewStyle } from "react-native";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CategoryItem, Header } from "./components";
import styles from "./styles";
import { useMemo } from "react";
import { useFetchCategories } from "@hooks";

const AllCategory = () => {
  const { top } = useSafeAreaInsets();
  const wrapperStyles: ViewStyle = {
    paddingTop: Math.max(top, dimensions[5]),
  };
  const { data, refetch, isRefetching } = useFetchCategories();
  const categories = useMemo(() => {
    if (!data) return [];
    return data.categories;
  }, [data]);
  return (
    <View style={[styles.wrapper, wrapperStyles]}>
      <Header />
      <FlatList
        data={categories}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        renderItem={({ index, item }) => (
          <CategoryItem index={index} item={item} />
        )}
      />
    </View>
  );
};

export default AllCategory;
