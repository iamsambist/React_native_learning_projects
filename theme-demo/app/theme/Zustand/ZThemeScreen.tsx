import { Pressable, Text, View } from "react-native";
import { useThemeStore } from "./zStore";

export function ZThemeScreen() {
  const { themeName, toggleTheme } = useThemeStore();
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
          Current theme Using Zustand: {themeName}
        </Text>
      </Pressable>
    </View>
  );
}
