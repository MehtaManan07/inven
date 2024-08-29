import {
  BaseButton,
  StyledText,
  TextInput,
  Select,
  type SelectRef,
} from "@components";
import { colorSamples as colorsList } from "@foundation";
import type { CreateRawMaterialDto } from "@api/materials/types";
import { dimensions } from "@foundation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "./components";
import { useCallback, useRef, useState } from "react";
import { useCreateRawMaterialMutation, useFetchCategories } from "@hooks";
import { View } from "react-native";
import Toast from "react-native-toast-message";

import { IForm, Props } from "./types";
import styles from "./styles";

const MaterialScreen = ({ navigation, route }: Props) => {
  const { mutateAsync } = useCreateRawMaterialMutation({
    onSuccess: () => {
      Toast.show({
        type: "successToast",
        text1: "Material added successfully",
      });
      navigation.goBack();
    },
    onError: (error) => {
      console.log("error", error);
      Toast.show({
        type: "warningToast",
        text1: "Failed to add material",
      });
    },
  });
  const { top } = useSafeAreaInsets();
  const { data: selectionData } = useFetchCategories({
    select: (data) => ({
      subCategories: data.subCategories,
      sizes: data.sizes,
    }),
  });
  const colorRef = useRef<SelectRef>(null);
  const sizeRef = useRef<SelectRef>(null);
  const subCategoryRef = useRef<SelectRef>(null);
  const wrapperStyles = {
    paddingTop: Math.max(top, dimensions[5]),
  };

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<IForm>({
    name: "",
    size: "",
    weightPerUnit: "",
    availableUnits: "",
    color: "",
    subCategory: "",
  });
  const handleStateChange = (key: keyof IForm, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    const isNameValid = !!formData.name;
    const isWeightPerUnitValid = !isNaN(parseFloat(formData.weightPerUnit));
    const isPacketsAvailableValid = !isNaN(parseFloat(formData.availableUnits));
    if (!isNameValid || !isWeightPerUnitValid || !isPacketsAvailableValid) {
      Toast.show({
        type: "warningToast",
        text1: "Please fill all the fields correctly",
      });
      setIsLoading(false);
      return;
    }
    const isColorValid = colorRef.current?.isValid;
    const isSubCategoryValid = subCategoryRef.current?.isValid;
    const isSizeValid = sizeRef.current?.isValid;
    if (!isColorValid || !isSubCategoryValid || !isSizeValid) {
      Toast.show({
        type: "warningToast",
        text1: "Please fill all the fields",
      });
      setIsLoading(false);
      return;
    }
    const categories = [formData.subCategory, route.params.category];
    const parentCategory = route.params.category;
    const payload: CreateRawMaterialDto = {
      ...formData,
      categories,
      parentCategory,
      size: formData.size,
      weightPerUnit: parseFloat(formData.weightPerUnit),
      availableUnits: parseFloat(formData.availableUnits),
    };

    await mutateAsync({ data: payload });
    setIsLoading(false);
  }, [formData, mutateAsync, route.params.category]);
  return (
    <View style={[styles.wrapper, wrapperStyles]}>
      <Header />
      <View style={{ gap: 20 }}>
        <View style={{ gap: 4 }}>
          <StyledText>Material name</StyledText>
          <TextInput
            keyboardType="default"
            placeholder="White stone"
            value={formData.name}
            onChangeText={(text) => handleStateChange("name", text)}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.leftInput}>
            <StyledText variant="b2-m">Material size</StyledText>

            <Select
              ref={sizeRef}
              allowCustom
              data={selectionData?.sizes ?? []}
              size="lg"
              onSelect={(value) => handleStateChange("size", value)}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.leftInput}>
            <StyledText variant="b2-m">Weight per unit {`(gm)`}</StyledText>
            <TextInput
              keyboardType="numeric"
              placeholder="500"
              value={formData.weightPerUnit}
              onChangeText={(text) => handleStateChange("weightPerUnit", text)}
            />
          </View>
          <View style={styles.rightInput}>
            <StyledText variant="b2-m">Total units</StyledText>
            <TextInput
              keyboardType="numeric"
              placeholder="11"
              value={formData.availableUnits}
              onChangeText={(text) => handleStateChange("availableUnits", text)}
            />
          </View>
        </View>
        <View style={{ gap: 4 }}>
          <StyledText>Material color</StyledText>
          <Select
            ref={colorRef}
            data={colorsList}
            size="lg"
            onSelect={(value) => handleStateChange("color", value)}
          />
        </View>
        <View style={{ gap: 4 }}>
          <StyledText>Sub category</StyledText>
          <Select
            ref={subCategoryRef}
            allowCustom
            data={selectionData?.subCategories ?? []}
            size="lg"
            onSelect={(value) => handleStateChange("subCategory", value)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <BaseButton
            isDisabled={isLoading}
            isLoading={isLoading}
            label="Add Item"
            size="sm"
            onPress={onSubmit}
          />
        </View>
      </View>
    </View>
  );
};

export default MaterialScreen;
