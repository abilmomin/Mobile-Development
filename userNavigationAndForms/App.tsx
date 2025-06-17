import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './app/pages/SignIn';
import WelcomeScreen from './app/pages/Welcome';
import Calgary from './app/pages/Calgary'; // Added Calgary import - johan
import Vancouver from './app/pages/Vancouver'; // Added Vancouver import - johan

export type RootStackParamList = {
  SignIn: undefined;
  Welcome: undefined;
  SignUp: undefined;
  Calgary: undefined;    // Added Calgary to stack params - johan
  Vancouver: undefined;  // Added Vancouver to stack params - johan
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Calgary" 
          component={Calgary} 
          options={{ headerShown: false }}
        /> {/* Added Calgary screen - johan */}
        <Stack.Screen 
          name="Vancouver" 
          component={Vancouver} 
          options={{ headerShown: false }}
        /> {/* Added Vancouver screen - johan */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;