import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { colors } from "@foundation";
import { Platform } from "react-native";

const navigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_right",
  contentStyle: { backgroundColor: colors.common.transparent },
  orientation: "portrait",
  freezeOnBlur: true,
  animationDuration: Platform.OS === "ios" ? 300 : 0,
};

export default navigatorOptions;
