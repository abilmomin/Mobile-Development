import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../index'; 
import { signUpStyles as styles } from '../styles/SignUpStyles';

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

interface SignUpProps {
  navigation: SignUpNavigationProp;
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = () => {
    if (!name.trim()) {
      Alert.alert('Missing Name', 'Please enter your full name.');
      return;
    }

    if (username.length < 5) {
      Alert.alert('Invalid Username', 'Username must be at least 5 characters long.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Weak Password', 'Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }

    if (!agreeToTerms) {
      Alert.alert('Terms Not Accepted', 'You must agree to the terms and conditions.');
      return;
    }

    Alert.alert('Success', 'Account created successfully!');
    // navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Re-type Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Custom Checkbox */}
        <TouchableOpacity
          onPress={() => setAgreeToTerms(!agreeToTerms)}
          style={styles.checkboxContainer}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 3,
              borderWidth: 1,
              borderColor: '#999',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: agreeToTerms ? '#007AFF' : 'white',
            }}
          >
            {agreeToTerms && (
              <Text style={{ color: 'white', fontWeight: 'bold' }}>✓</Text>
            )}
          </View>
          <Text style={styles.checkboxLabel}>I agree to the Terms and Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInRedirect}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;