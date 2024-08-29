import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './screens';

import navigatorOptions from '../navigatorOptions';

import { PostLoginFlowStackParamList } from './types';

const LoginFlowStack =
  createNativeStackNavigator<PostLoginFlowStackParamList>();

const LoginFlow = () => {
  return (
    <LoginFlowStack.Navigator
      initialRouteName="Home"
      screenOptions={navigatorOptions}
    >
      <LoginFlowStack.Screen component={HomeScreen} name="Home" />
    </LoginFlowStack.Navigator>
  );
};

export default LoginFlow;
