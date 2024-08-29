import { requireNativeComponent, ViewStyle } from "react-native";
export type Props = {
  style: ViewStyle;
  newTask: string;
};

const ToDoListView = requireNativeComponent<Props>("ToDoListView");

export { ToDoListView };
