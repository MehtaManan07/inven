import { toastConfig } from "@components";
import { colors } from "@foundation";
import { useInit } from "@hooks";
import { Navigator, Routes } from "@navigation";

import * as SplashScreen from "expo-splash-screen";
import { QueryProvider } from "providers";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
// Keep the splash screen visible till we hide it...
SplashScreen.preventAutoHideAsync();

const App = () => {
  const isInitComplete = useInit();
  useEffect(() => {
    console.log("isInitComplete", isInitComplete);
    if (isInitComplete) {
      SplashScreen.hideAsync();
    }
  }, [isInitComplete]);

  return (
    <QueryProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={colors.common.black}
            barStyle="default"
          />
          <Navigator>
            <Routes />
          </Navigator>
          <Toast config={toastConfig} />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryProvider>
  );
};

export default App;
