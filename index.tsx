import "@expo/metro-runtime";
import { registerRootComponent } from "expo";
import App from "./src/App";

const AppWithProviders = () => {
  return <App />;
};
registerRootComponent(AppWithProviders);
