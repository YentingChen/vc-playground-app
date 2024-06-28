import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Braze from "@braze/react-native-sdk";
import axios from "axios";

export default function App() {
  const externalID = "c133144dbd86ce";
  const sendTestBrazePushNotification = useCallback((externalID: string) => {
    const deeplink =
      "vouchercodes://offer/8170982?utm_campaign=abcd123&utm_medium=defg456&utm_source=hijk789";
    const imageUrl =
      "https://cdn.braze.eu/appboy/communication/assets/image_assets/images/65bb6f8e506cac0dcc7e08ad/original.png?1706782605";
    axios.post(
      "https://rest.fra-01.braze.eu/messages/send",
      {
        external_user_ids: [externalID],
        messages: {
          apple_push: {
            alert: "iOS PN Test",
            custom_uri: deeplink,
            asset_url: imageUrl,
            asset_file_type: "jpg",
          },
          android_push: {
            title: "PN Test",
            alert: "PN Test",
            custom_uri: deeplink,
          },
        },
      },
      {
        headers: {
          Authorization: "Bearer 97ff942d-c768-4524-b1f3-6bbb3f4f171b",
        },
      }
    );
  }, []);
  useEffect(() => {
    const permissionOptions = {
      alert: true,
      sound: true,
      badge: true,
      provisional: false,
    };

    Braze.requestPushPermission(permissionOptions);
    Braze.changeUser(externalID);
  }, []);
  return (
    <View style={styles.container}>
      <Text>
        This is an internal app to test out various technologies and experiments
      </Text>
      <Button
        title="Press me"
        onPress={() => sendTestBrazePushNotification(externalID)}
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
