import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CityInfoProps {
  facts: string[];
}

export default function CityInfo({ facts }: CityInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interesting Facts</Text>
      {facts.map((fact, index) => (
        <View key={index} style={styles.factContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.factText}>{fact}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  factContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: '#007AFF',
    marginRight: 8,
    marginTop: 2,
  },
  factText: {
    flex: 1,
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
});