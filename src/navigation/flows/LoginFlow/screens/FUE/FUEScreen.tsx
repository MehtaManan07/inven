/* eslint-disable react-native/no-color-literals */
// import { BaseButton, ScreenFrame } from "@components";
// import { Dimensions, View } from "react-native";
// import styles from "./styles";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { dimensions } from "@foundation";
// import FastImage from "react-native-fast-image";
// import type { Props } from "./types";

// const screenWidth = Dimensions.get("screen").width;
// const FUEScreen = ({ navigation }: Props) => {
//   const { top } = useSafeAreaInsets();
//   const wrapperStyles = {
//     paddingTop: Math.max(top, dimensions[20]),
//   };

//   const onContinue = () => {
//     navigation.navigate("Login");
//   };

//   return (
//     <ScreenFrame>
//       <View style={[styles.wrapper, wrapperStyles]}>
//         <FastImage
//           resizeMode="contain"
//           source={require("@assets/common/logo-color.png")}
//           style={{
//             width: screenWidth - 2 * 60,
//             aspectRatio: 1,
//           }}
//         />
//       </View>
//       <View style={styles.footer}>
//         <BaseButton label="Get Started" onPress={onContinue} />
//       </View>
//     </ScreenFrame>
//   );
// };

// export default FUEScreen;
import { useState } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  NativeModules,
} from "react-native";
import { ToDoListView } from "./TodoListView";

const { CalendarModule } = NativeModules;

const ToDoApp = () => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim().length > 0) {
      CalendarModule.createCalendarEvent("testName", task);
      // setTasks([...tasks, task]); // Update the list of tasks
      // setTask(""); // Clear the input field after adding
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a new task"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <ToDoListView newTask="asasa" style={{}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: "#ccc",
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default ToDoApp;
