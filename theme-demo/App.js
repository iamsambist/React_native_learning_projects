import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { ThemeProvider } from "./app/theme/ThemeContext";
import { ThemeScreen } from "./app/theme/ThemeScreen";
import { ThemeScreenUsingUseTheme } from "./app/theme/TSWithUseContext";
import { useContext } from "react";
import { ZThemeScreen } from "./app/theme/Zustand/ZThemeScreen";

import { Display } from "./app/CustomFont/Display";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { View, ActivityIndicator } from "react-native";
export default function App() {
  const [loasSfFonts] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });
  const [fontsLoaded] = useFonts({
    "InflatePTx-Base": require("./app/assets/fonts/InflateptxBase-ax3da.ttf"),
  });
  if (!fontsLoaded && !loasSfFonts) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Display />;
}
