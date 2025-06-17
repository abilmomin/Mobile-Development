import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calgary from '../pages/Calgary';
import Vancouver from '../pages/Vancouver';
import SignUp from '../pages/SignUp';

const Tab = createBottomTabNavigator();

const NavigationController: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Calgary" component={Calgary} />
      <Tab.Screen name="Vancouver" component={Vancouver} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default NavigationController;

// Calgary.tsx
import React from 'react';
import { View, Text } from 'react-native';
export default function Calgary() {
  return <View><Text>Calgary Tab Works!</Text></View>;
}
