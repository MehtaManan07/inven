import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskScreenStackParamList } from './types';
import { AllTasksScreen, CreateTaskScreen } from './screens';
import navigatorOptions from '../../../../../navigatorOptions';

const StockScreenStack = createNativeStackNavigator<TaskScreenStackParamList>();

const StockScreen = () => {
  return (
    <StockScreenStack.Navigator
      initialRouteName="AllTasks"
      screenOptions={navigatorOptions}
    >
      <StockScreenStack.Screen component={CreateTaskScreen} name="CreateTask" />
      <StockScreenStack.Screen component={AllTasksScreen} name="AllTasks" />
    </StockScreenStack.Navigator>
  );
};

export default StockScreen;
