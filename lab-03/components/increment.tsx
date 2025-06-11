import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

interface IncrementProps {
  count: number;
  onIncrement: () => void;
}

export default function Increment({ count, onIncrement }: IncrementProps) {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
      onPress={onIncrement}
    >
      <Text style={styles.buttonText}>Increment</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    minWidth: 160,
    marginVertical: 8,
  },
  buttonPressed: {
    backgroundColor: 'lightgreen',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});