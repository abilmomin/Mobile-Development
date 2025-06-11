import { View, Text, Button, StyleSheet } from 'react-native';
import FruitList from '../components/FruitLists';
import { router } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 100, alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to the Fruit App!</Text>
      <FruitList />

      <View style={styles.buttonContainer}>
          <Button title="Go to Lab3" onPress={() => router.push("/lab3")} />
      </View>

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white'},
  title: { fontSize: 24, marginBottom: 10 },
  image: { width: 200, height: 200 },
  buttonContainer: { marginTop: 20 },
});