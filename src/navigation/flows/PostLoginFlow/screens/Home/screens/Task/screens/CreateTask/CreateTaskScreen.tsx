import { dimensions } from "@foundation";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";
import { IForm, Props } from "./types";
import { Header, RawMaterialInput } from "./components";
import {
  BaseButton,
  Select,
  SelectRef,
  StyledText,
  TextInput,
} from "@components";
import { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import Toast from "react-native-toast-message";
import {
  useCreateTaskMutation,
  useFetchUsersByRole,
  useFetchTasks,
} from "@hooks";
import { CreateTaskDto } from "@api";

const initialState: IForm = {
  description: "",
  jobberId: -1,
  rawMaterialQuantities: [],
  type: "",
};

const CreateTaskScreen = ({ navigation }: Props) => {
  const { data: taskTypes = [] } = useFetchTasks({
    select: (data) => data.taskTypes,
  });
  const { mutateAsync } = useCreateTaskMutation({
    onSuccess: () => {
      Toast.show({
        type: "successToast",
        text1: "Task added successfully",
      });
      navigation.goBack();
    },
    onError: (error) => {
      setIsLoading(false);
      console.log("error", error);
      Toast.show({
        type: "warningToast",
        text1: `Failed to add material, ${error}`,
      });
    },
  });
  const { top } = useSafeAreaInsets();
  const { data: selectionData } = useFetchUsersByRole({
    roles: ["MANAGER", "JOBBER"],
  });

  const taskRef = useRef<SelectRef>(null);
  const jobberRef = useRef<SelectRef>(null);
  const wrapperStyles = {
    paddingTop: Math.max(top, dimensions[5]),
  };

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<IForm>(initialState);
  const handleStateChange = (key: keyof IForm, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    const list = formData.rawMaterialQuantities;
    const isTaskValid = taskRef.current?.isValid;
    const isJobberValid = jobberRef.current?.isValid;
    if (!isTaskValid || !isJobberValid) {
      Toast.show({
        type: "warningToast",
        text1: "Please fill all the fields",
      });
      setIsLoading(false);
      return;
    }
    const rawMaterialQuantities = list.map((item) => {
      return {
        materialId: parseInt(item.materialId),
        quantityUsed: parseFloat(item.quantityUsed),
      };
    });
    if (rawMaterialQuantities.length === 0) {
      Toast.show({
        type: "warningToast",
        text1: "Please add at least one material",
      });
      setIsLoading(false);
      return;
    }
    const jobberId = parseInt(formData.jobberId.toString());
    const description =
      formData.description.length > 0 ? formData.description : "No description";
    const payload: CreateTaskDto = {
      description,
      jobberId: jobberId,
      rawMaterialQuantities,
      type: formData.type,
    };

    await mutateAsync({ payload });
    setIsLoading(false);
  }, [formData, mutateAsync]);

  const onPressPlus = (data: {
    materialId: string;
    quantityUsed: string;
    label: string;
  }) => {
    setFormData((prev) => {
      return {
        ...prev,
        rawMaterialQuantities: [data, ...prev.rawMaterialQuantities],
      };
    });
  };

  const onPressMinus = (materialId: string) => {
    setFormData((prev) => {
      const filteredList = prev.rawMaterialQuantities.filter(
        (value) => value.materialId !== materialId.toString()
      );
      return {
        ...prev,
        rawMaterialQuantities: filteredList,
      };
    });
  };

  const renderedMaterials: ReactNode[] = useMemo(() => {
    const materialList = formData.rawMaterialQuantities;
    return materialList.map((value) => {
      return (
        <RawMaterialInput
          key={value.materialId}
          icon={"minus"}
          value={value}
          onPressPlus={() => onPressMinus(value.materialId)}
        />
      );
    });
  }, [formData.rawMaterialQuantities]);
  return (
    <View style={[styles.wrapper, wrapperStyles]}>
      <Header />
      <View style={{ gap: 20 }}>
        <View style={{ gap: 4 }}>
          <StyledText>Job type</StyledText>
          <Select
            ref={taskRef}
            allowCustom
            data={taskTypes}
            placeholder="cutting"
            size="lg"
            onSelect={(value) => handleStateChange("type", value)}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.leftInput}>
            <StyledText variant="b2-m">Jobber name</StyledText>

            <Select
              ref={jobberRef}
              allowCustom
              data={selectionData?.map((u) => u.name) ?? []}
              placeholder="aarti"
              size="lg"
              onSelect={(value) =>
                handleStateChange(
                  "jobberId",
                  selectionData
                    ?.filter((u) => u.name === value)[0]
                    .id.toString() ?? "-1"
                )
              }
            />
          </View>
        </View>
        <View style={{ gap: 4 }}>
          <StyledText>Description {`(optional)`}</StyledText>
          <TextInput
            keyboardType="default"
            placeholder="Cutting of mdf sheets"
            value={formData.description}
            onChangeText={(text) => handleStateChange("description", text)}
          />
        </View>
        <View style={{ gap: 8 }}>
          <StyledText>Material to be used</StyledText>
          <View style={{ gap: 4 }}>
            {renderedMaterials}
            <RawMaterialInput icon={"plus"} onPressPlus={onPressPlus} />
          </View>
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

export default CreateTaskScreen;
