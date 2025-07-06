import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

// Fetches a fact from the Numbers API
const fetchFact = async (month, day, setFact) => {
  const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date?json=true`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9413e12288msh6a7c715f53b536ap174feejsn3bdef7b03783',
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    setFact(result.text);
  } catch (error) {
    setFact('Error fetching fact. Please try again.');
  }
};

// Main App component
const App = () => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [fact, setFact] = useState('');

  // Fetch for a fact when valid month and day are entered
  useEffect(() => {
    const isValidMonth = Number(month) >= 1 && Number(month) <= 12;
    const isValidDay = Number(day) >= 1 && Number(day) <= 31;
    if (isValidMonth && isValidDay) {
      fetchFact(month, day, setFact);
    } else {
      setFact('');
    }
  }, [month, day]);

  // UI rendering and layout
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.label}>Enter Month (1-12):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="e.g. 6"
            value={month}
            onChangeText={setMonth}
            maxLength={2}
          />

          <Text style={styles.label}>Enter Day (1-31):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="e.g. 21"
            value={day}
            onChangeText={setDay}
            maxLength={2}
          />

          {fact !== '' && <Text style={styles.fact}>{fact}</Text>}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// Styles for the app
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    minHeight: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
  },
  fact: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: '500',
    color: '#333',
  },
});

export default App;
