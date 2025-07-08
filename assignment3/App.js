// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

// // Fetches a fact from the Numbers API
// const fetchFact = async (month, day, setFact) => {
//   const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date?json=true`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '9413e12288msh6a7c715f53b536ap174feejsn3bdef7b03783',
//       'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     setFact(result.text);
//   } catch (error) {
//     setFact('Error fetching fact. Please try again.');
//   }
// };

// // Main App component
// const App = () => {
//   const [month, setMonth] = useState('');
//   const [day, setDay] = useState('');
//   const [fact, setFact] = useState('');

//   // Fetch for a fact when valid month and day are entered
//   useEffect(() => {
//     const isValidMonth = Number(month) >= 1 && Number(month) <= 12;
//     const isValidDay = Number(day) >= 1 && Number(day) <= 31;
    
//     if (Number(month) == 2 && Number(day) == 30 || Number(day) == 31) {   // Added a logic for Feburary edge case
//       setFact('February has only 28 or 29 days.');
//       // fetchFact(month, day, setFact);
//     }
//     else if (isValidMonth && isValidDay) {
//       fetchFact(month, day, setFact);
//     }
//     else {
//       setFact('');
//     }
//   }, [month, day]);

//   // UI rendering and layout
//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
//         <View style={styles.container}>
//           <Text style={styles.label}>Enter Month (1-12):</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="e.g. 6"
//             value={month}
//             onChangeText={setMonth}
//             maxLength={2}
//           />

//           <Text style={styles.label}>Enter Day (1-31):</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="e.g. 21"
//             value={day}
//             onChangeText={setDay}
//             maxLength={2}
//           />

//           {fact !== '' && <Text style={styles.fact}>{fact}</Text>}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// // Styles for the app
// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     minHeight: 300,
//     backgroundColor: '#ffffff'        // forces the dark theme phone to avoid dark background at the start
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     borderRadius: 6,
//     marginBottom: 16,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//     fontSize: 16,
//   },
//   fact: {
//     fontSize: 18,
//     marginTop: 20,
//     fontWeight: '500',
//     color: '#333',
//   },
// });

// export default App;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// // Fetches a fact from the Numbers API
// const fetchFact = async (month, day, setFact) => {
//   const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date?json=true`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '9413e12288msh6a7c715f53b536ap174feejsn3bdef7b03783',
//       'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     setFact(result.text);
//   } catch (error) {
//     setFact('Error fetching fact. Please try again.');
//   }
// };

// // Main App component
// const App = () => {
//   const [month, setMonth] = useState('');
//   const [day, setDay] = useState('');
//   const [fact, setFact] = useState('');

//   // Month names for the dropdown
//   const months = [
//     { label: 'Select Month', value: '' },
//     { label: 'January', value: '1' },
//     { label: 'February', value: '2' },
//     { label: 'March', value: '3' },
//     { label: 'April', value: '4' },
//     { label: 'May', value: '5' },
//     { label: 'June', value: '6' },
//     { label: 'July', value: '7' },
//     { label: 'August', value: '8' },
//     { label: 'September', value: '9' },
//     { label: 'October', value: '10' },
//     { label: 'November', value: '11' },
//     { label: 'December', value: '12' },
//   ];

//   // Fetch for a fact when valid month and day are entered
//   useEffect(() => {
//     const isValidMonth = Number(month) >= 1 && Number(month) <= 12;
//     const isValidDay = Number(day) >= 1 && Number(day) <= 31;
    
//     if (Number(month) == 2 && Number(day) == 30 || Number(day) == 31) {   // Added a logic for February edge case
//       setFact('February has only 28 or 29 days.');
//       // fetchFact(month, day, setFact);
//     }
//     else if (isValidMonth && isValidDay) {
//       fetchFact(month, day, setFact);
//     }
//     else {
//       setFact('');
//     }
//   }, [month, day]);

//   // UI rendering and layout
//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
//         <View style={styles.container}>
//           <Text style={styles.label}>Select Month:</Text>
//           <View style={styles.pickerContainer}>
//             <Picker
//               selectedValue={month}
//               onValueChange={(itemValue) => setMonth(itemValue)}
//               style={styles.picker}
//             >
//               {months.map((monthItem) => (
//                 <Picker.Item
//                   key={monthItem.value}
//                   label={monthItem.label}
//                   value={monthItem.value}
//                 />
//               ))}
//             </Picker>
//           </View>

//           <Text style={styles.label}>Enter Day (1-31):</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="e.g. 21"
//             value={day}
//             onChangeText={setDay}
//             maxLength={2}
//           />

//           {fact !== '' && <Text style={styles.fact}>{fact}</Text>}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// // Styles for the app
// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     minHeight: 300,
//     backgroundColor: '#ffffff'        // forces the dark theme phone to avoid dark background at the start
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     borderRadius: 6,
//     marginBottom: 16,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//     fontSize: 16,
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 6,
//     marginBottom: 16,
//     backgroundColor: '#fff',
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//   },
//   fact: {
//     fontSize: 18,
//     marginTop: 20,
//     fontWeight: '500',
//     color: '#333',
//   },
// });

// export default App;

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
    { label: ' ', value: '' },
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

  // Fetch for a fact when valid month and day are entered
  useEffect(() => {
    const isValidMonth = Number(month) >= 1 && Number(month) <= 12;
    const isValidDay = Number(day) >= 1 && Number(day) <= 31;
    
    if (Number(month) == 2 && Number(day) == 30 || Number(day) == 31) {   // Added a logic for February edge case
      setFact('February has only 28 or 29 days.');
      // fetchFact(month, day, setFact);
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
        <View style={styles.container}>
          <Text style={styles.label}>Select Month:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={month}
              onValueChange={(itemValue) => setMonth(itemValue)}
              style={styles.picker}
              mode="dropdown"
            >
              {months.map((monthItem) => (
                <Picker.Item
                  key={monthItem.value}
                  label={monthItem.label}
                  value={monthItem.value}
                />
              ))}
            </Picker>
          </View>

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
    backgroundColor: '#ffffff'        // forces the dark theme phone to avoid dark background at the start
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
  pickerContainer: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 1,
    marginBottom: 50,
    backgroundColor: '#fff',
    ...(Platform.OS === 'ios' && {
      paddingHorizontal: 10,
      paddingVertical: 5, // iOS picker padding
    }),
  },
  picker: {
    height: 10,
    width: '100%',
    ...(Platform.OS === 'ios' && {
      height: -10, // iOS picker height
    }),
  },
  fact: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});

export default App;