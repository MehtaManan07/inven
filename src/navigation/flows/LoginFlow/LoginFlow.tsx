import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FUEScreen, LoginScreen } from "./screens";

import navigatorOptions from "../navigatorOptions";

import { LoginFlowStackParamList } from "./types";

const LoginFlowStack = createNativeStackNavigator<LoginFlowStackParamList>();

const LoginFlow = () => {
  return (
    <LoginFlowStack.Navigator
      initialRouteName="FUE"
      screenOptions={navigatorOptions}
    >
      <LoginFlowStack.Screen component={FUEScreen} name="FUE" />
      <LoginFlowStack.Screen component={LoginScreen} name="Login" />
    </LoginFlowStack.Navigator>
  );
};

export default LoginFlow;
