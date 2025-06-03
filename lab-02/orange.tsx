import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function OrangeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orange</Text>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" }}
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