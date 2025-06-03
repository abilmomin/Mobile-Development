import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function AppleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apple</Text>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 10 },
  image: { width: 200, height: 200 },
});