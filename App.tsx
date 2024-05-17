import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as Settings from "./modules/my-module";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    Settings.setGroupUserDefaultsValue("launch the app");
  }, []);
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
      <Button
        title="Clean group UserDefaults"
        onPress={() => Settings.setGroupUserDefaultsValue("")}
      />
      <Button
        title="Set group UserDefaults value: def"
        onPress={() => Settings.setGroupUserDefaultsValue("def")}
      />
      <Button
        title="Get group UserDefaults"
        onPress={() =>
          Alert.alert("message", `${Settings.getGroupUserDefaultsValue()}`)
        }
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
