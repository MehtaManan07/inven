import styles from "./styles";

import type { Props } from "./types";
import { Keyboard, View } from "react-native";

const ScreenFrame = ({ children, shouldCloseKeyboard = true }: Props) => {
  const handleSetResponders = () => {
    if (shouldCloseKeyboard) {
      Keyboard.dismiss();
    }
    return false;
  };
  return (
    <View
      style={styles.wrapper}
      onStartShouldSetResponder={handleSetResponders}
    >
      {children}
    </View>
  );
};

export default ScreenFrame;
