import { NavigationContainer } from "@react-navigation/native";
import { Props } from "./types";

const Navigator = ({ children }: Props) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default Navigator;
