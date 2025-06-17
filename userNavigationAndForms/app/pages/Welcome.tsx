import React from 'react';
import { View, Text } from 'react-native';
import TabNavigator from '../navigation/NavigationController';
import { styles } from '../styles/WelcomeStyles';

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeTitle}>Welcome to My New App</Text>
      <View style={styles.tabWrapper}>
        <TabNavigator />
      </View>
    </View>
  );
};

export default WelcomeScreen;