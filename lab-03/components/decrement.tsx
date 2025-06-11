import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

interface DecrementProps {
  count: number;
  onDecrement: () => void;
}

export default function Decrement({ count, onDecrement }: DecrementProps) {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
      onPress={onDecrement}
    >
      <Text style={styles.buttonText}>Decrement</Text>
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
    backgroundColor: 'lightcoral',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});