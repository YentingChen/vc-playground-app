import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as Settings from "./modules/my-module";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        {Settings.hello()}
        This is an internal app to test out various technologies and experiments
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
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
