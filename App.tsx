import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Braze from "react-native-appboy-sdk";

export default function App() {
  useEffect(() => {
    Braze.changeUser("494efe606b75b1");
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is an internal app to test out various technologies and experiments</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
