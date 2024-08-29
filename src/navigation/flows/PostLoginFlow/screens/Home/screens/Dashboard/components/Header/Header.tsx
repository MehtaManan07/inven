import { View } from "react-native";
import styles from "./styles";
import { BellIcon, OutlinedText } from "@components";
import { colors, dimensions } from "@foundation";

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <OutlinedText>CRAFTO</OutlinedText>
      <BellIcon color={colors.common.black} size={dimensions[6]} />
    </View>
  );
};

export default Header;
