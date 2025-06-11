import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function OrangeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orange</Text>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button title="Back to Home" onPress={() => router.push("/")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 10 },
  image: { width: 200, height: 200 },
  buttonContainer: { marginTop: 20 },
});