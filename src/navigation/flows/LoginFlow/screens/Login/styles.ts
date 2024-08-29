import { colors, dimensions } from "@foundation";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.common.white,
    gap: dimensions[4],
    paddingBottom: dimensions[8],
    paddingHorizontal: dimensions[5],
    paddingTop: dimensions[5],
  },
  input: {
    gap: dimensions[1],
  },
  wrapper: {
    flex: 1,
    gap: dimensions[5],
    justifyContent: "center",
    paddingHorizontal: dimensions[5],
  },
});

export default styles;
