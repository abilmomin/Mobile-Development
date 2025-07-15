import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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

  // Month names for the dropdown
  const months = [
    { label: 'Select a Month', value: '' },
    { label: 'January', value: '1' },
    { label: 'February', value: '2' },
    { label: 'March', value: '3' },
    { label: 'April', value: '4' },
    { label: 'May', value: '5' },
    { label: 'June', value: '6' },
    { label: 'July', value: '7' },
    { label: 'August', value: '8' },
    { label: 'September', value: '9' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];

  // Check if it's a special date for theming
  const isChristmas = month === '12' && day === '25';
  const isNewYear = month === '1' && day === '1';
  const isValentines = month === '2' && day === '14';
  const isHalloween = month === '10' && day === '31';

  // Get theme colors based on date
  const getThemeColors = () => {
    if (isChristmas) return { primary: '#d42c2c', secondary: '#2d5a2d', accent: '#ffd700' };
    if (isNewYear) return { primary: '#ffd700', secondary: '#ff6b6b', accent: '#4ecdc4' };
    if (isValentines) return { primary: '#ff69b4', secondary: '#ff1493', accent: '#ffb6c1' };
    if (isHalloween) return { primary: '#ff8c00', secondary: '#4b0082', accent: '#32cd32' };
    return { primary: '#4a90e2', secondary: '#357abd', accent: '#7bb3f0' };
  };

  const theme = getThemeColors();

  // Get special emoji based on date
  const getSpecialEmoji = () => {
    if (isChristmas) return '🎄🎅🎁';
    if (isNewYear) return '🎊🎉🥳';
    if (isValentines) return '💕💝💖';
    if (isHalloween) return '🎃👻🦇';
    return '✨';
  };

  // Fetch for a fact when valid month and day are entered
  useEffect(() => {
    const isValidMonth = Number(month) >= 1 && Number(month) <= 12;
    const isValidDay = Number(day) >= 1 && Number(day) <= 31;
    
    if (Number(month) == 2 && (Number(day) == 30 || Number(day) == 31)) {
      setFact('February has only 28 or 29 days.');
    }
    else if (isValidMonth && isValidDay) {
      fetchFact(month, day, setFact);
    }
    else {
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
        <View style={[styles.container, { backgroundColor: theme.primary + '10' }]}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: theme.primary }]}>
              {getSpecialEmoji()} Historical Facts {getSpecialEmoji()}
            </Text>
            <Text style={styles.subtitle}>Discover what happened on any date!</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={[styles.label, { color: theme.secondary }]}>Select Month:</Text>
            <View style={[styles.pickerContainer, { borderColor: theme.primary, shadowColor: theme.primary }]}>
              <Picker
                selectedValue={month}
                onValueChange={(itemValue) => setMonth(itemValue)}
                style={[styles.picker, { color: theme.secondary }]}
                mode="dropdown"
              >
                {months.map((monthItem) => (
                  <Picker.Item
                    key={monthItem.value}
                    label={monthItem.label}
                    value={monthItem.value}
                    color={theme.secondary}
                  />
                ))}
              </Picker>
            </View>

            <Text style={[styles.label, { color: theme.secondary }]}>Enter Day (1-31):</Text>
            <TextInput
              style={[styles.input, { borderColor: theme.primary, shadowColor: theme.primary }]}
              keyboardType="numeric"
              placeholder="e.g. 25"
              placeholderTextColor="#999"
              value={day}
              onChangeText={setDay}
              maxLength={2}
            />
          </View>

          {fact !== '' && (
            <View style={[styles.factContainer, { backgroundColor: theme.primary + '20', borderColor: theme.accent }]}>
              <Text style={[styles.factTitle, { color: theme.primary }]}>
                {getSpecialEmoji()} Did You Know? {getSpecialEmoji()}
              </Text>
              <Text style={[styles.fact, { color: theme.secondary }]}>{fact}</Text>
            </View>
          )}
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
    backgroundColor: '#ffffff', // forces the dark theme phone to avoid dark background at the start
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 14,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 14,
  },
  pickerContainer: {
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    ...(Platform.OS === 'ios' && {
      paddingHorizontal: 15,
      paddingVertical: 5,
    }),
  },
  picker: {
    height: 50,
    width: '100%',
    fontSize: 14,
    ...(Platform.OS === 'ios' && {
      height: -10,
    }),
  },
  factContainer: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  factTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  fact: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default App;