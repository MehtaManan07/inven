import { BaseButton, ScreenFrame, StyledText, TextInput } from "@components";
import { dimensions } from "@foundation";
import { useLoginUser } from "@hooks";

import { useCallback, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./styles";
import type { Props } from "./types";

const Login = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets();
  const wrapperStyles = { paddingTop: Math.max(top, dimensions[5]) };
  const { mutateAsync, isPending } = useLoginUser({
    onSuccess: () => navigation.navigate("FUE"),
  });
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const changeFormData = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  const onContinue = useCallback(async () => {
    await mutateAsync(formData);
  }, [formData, mutateAsync]);
  return (
    <ScreenFrame>
      <View style={[styles.wrapper, wrapperStyles]}>
        <View style={styles.input}>
          <StyledText>Username</StyledText>
          <TextInput
            onChangeText={(text) => changeFormData("username", text)}
          />
        </View>
        <View style={styles.input}>
          <StyledText>Password</StyledText>
          <TextInput
            onChangeText={(text) => changeFormData("password", text)}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <BaseButton
          isLoading={isPending}
          label="Login"
          isDisabled={
            isPending || formData.password === "" || formData.username === ""
          }
          onPress={onContinue}
        />
      </View>
    </ScreenFrame>
  );
};

export default Login;
