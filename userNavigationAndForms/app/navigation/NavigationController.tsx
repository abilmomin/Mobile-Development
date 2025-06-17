import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CalgaryScreen from '../pages/Calgary';
import VancouverScreen from '../pages/Vancouver';

const Tab = createBottomTabNavigator();

const NavigationController: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: { name: string } }) => ({
        tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === 'Calgary') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Vancouver') {
            iconName = focused ? 'location' : 'location-outline';
          } else {
            iconName = 'location-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Calgary" component={CalgaryScreen} />
      <Tab.Screen name="Vancouver" component={VancouverScreen} />
    </Tab.Navigator>
  );
};

export default NavigationController;