import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Button } from 'react-native';
import Increment from '../../components/increment';
import Decrement from '../../components/decrement';
import { router } from 'expo-router';

export default function Lab3() {
  const [counter, setCounter] = useState<number>(0);

  const incrementCount = (): void => {
    setCounter(prevCount => prevCount + 1);
  };

  const decrementCount = (): void => {

    // if (counter <= 0) {
    //   return;
    // } // Wont allow to decrement below 0

    setCounter(prevCount => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <View>
        <Increment count={counter} onIncrement={incrementCount} />
        
        <Decrement count={counter} onDecrement={decrementCount} />
        
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>Counter: {counter}</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button title="Go back Home" onPress={() => router.push("/")} />
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1000,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    minWidth: 160,
    marginVertical: 8,
  },
  counterText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  homeButton: {
    marginTop: 40,
    alignItems: 'center',
  },
  homeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});