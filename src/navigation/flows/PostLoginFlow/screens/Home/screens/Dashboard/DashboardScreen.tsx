import { dimensions } from "@foundation";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";
import { Header } from "./components";

const Dashboard = () => {
  const { top } = useSafeAreaInsets();
  const wrapperStyle = { paddingTop: Math.max(top, dimensions[5]) };
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Header />
    </View>
  );
};

export default Dashboard;
