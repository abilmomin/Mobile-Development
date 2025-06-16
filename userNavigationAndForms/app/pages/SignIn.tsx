import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { validateUsername, validatePassword, authenticateUser } from '../utils/UtilitiesForAuthentication';
import { styles } from '../styles/SignInStyles';

type SignInNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

interface SignInProps {
  navigation: SignInNavigationProp;
}

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = (): void => {
    // Validate username length
    if (!validateUsername(username)) {
      Alert.alert('Invalid Username', 'Username must be at least 5 characters long.');
      return;
    }

    // Validate password complexity
    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password', 
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    // Authenticate user
    const authResult = authenticateUser(username, password);
    
    if (authResult.success) {
      navigation.navigate('Welcome');
    } else {
      Alert.alert('Authentication Failed', authResult.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>
        
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
        
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.credentialsHint}>
          <Text style={styles.hintText}>Demo Credentials:</Text>
          <Text style={styles.hintText}>johnDoe / PassworD@123</Text>
          <Text style={styles.hintText}>janeSmith / Secure!456</Text>
          <Text style={styles.hintText}>mikeBrown / Test#7890</Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;