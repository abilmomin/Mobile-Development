import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const fruits = ["apple", "orange", "mango"];

export default function FruitList() {
  const router = useRouter();

  return (
    <View>
      {fruits.map((fruit) => (
        <TouchableOpacity
          key={fruit}
          style={styles.item}
          onPress={() => router.push(`/${fruit}`)}
        >
          <Text style={styles.text}>{fruit}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: { fontSize: 18 },
});