import { Pressable, Text, View } from "react-native";
import { useContext } from "react";

import { useTheme } from "./ThemeContext";
export function ThemeScreenUsingUseTheme() {
  const { themeName, toggleTheme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeName === "dark" ? "black" : "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable onPress={toggleTheme}>
        <Text style={{ color: themeName === "dark" ? "white" : "black" }}>
          Current theme using useTheme: {themeName}
        </Text>
      </Pressable>
    </View>
  );
}
