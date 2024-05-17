import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as Settings from "./modules/my-module";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Set value:  abc "
        onPress={() => Settings.setKeyValue("abc")}
      />
      <Button
        title="Set value:  ggg"
        onPress={() => Settings.setKeyValue("ggg")}
      />
      <Button
        title="Get Value"
        onPress={() => Alert.alert(`value: ${Settings.getKeyValue()}`)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
