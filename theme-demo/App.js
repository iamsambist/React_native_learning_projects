import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "./app/theme/ThemeContext";
import { ThemeScreen } from "./app/theme/ThemeScreen";
import { useContext } from "react";
export default function App() {
  return (
    <ThemeProvider>
      <ThemeScreen />
    </ThemeProvider>
  );
}
