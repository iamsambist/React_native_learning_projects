import { View, Text } from "react-native";

export function Display() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22 }}> This is default text</Text>
      <Text style={{ fontFamily: "DMSans_400Regular", fontSize: 22 }}>
        {" "}
        This is dm sans normal text
      </Text>
      <Text style={{ fontFamily: "DMSans_700Bold", fontSize: 22 }}>
        {" "}
        This is dm sans bold text
      </Text>
      <Text style={{ fontFamily: "InflatePTx-Base", fontSize: 22 }}>
        This is Custom Font loaded
      </Text>
    </View>
  );
}

export default Display;
