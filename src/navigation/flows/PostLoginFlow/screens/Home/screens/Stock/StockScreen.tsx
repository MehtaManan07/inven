import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StockScreenStackParamList } from './types';
import { AllCategoryScreen, CategoryScreen, CreateMaterialScreen } from './screens';
import navigatorOptions from '../../../../../navigatorOptions';

const StockScreenStack =
  createNativeStackNavigator<StockScreenStackParamList>();

const StockScreen = () => {
  return (
    <StockScreenStack.Navigator
      initialRouteName="AllCategory"
      screenOptions={navigatorOptions}
    >
      <StockScreenStack.Screen
        component={AllCategoryScreen}
        name="AllCategory"
      />
      <StockScreenStack.Screen component={CategoryScreen} name="Category" />
      <StockScreenStack.Screen component={CreateMaterialScreen} name="CreateMaterial" />
    </StockScreenStack.Navigator>
  );
};

export default StockScreen;
