import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to My New App</Text>
      </View>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: {
            backgroundColor: '#F2F2F7',
            borderTopWidth: 1,
            borderTopColor: '#C6C6C8',
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="calgary"
          options={{
            title: 'Calgary',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🏔️</Text>,
          }}
        />
        <Tabs.Screen
          name="vancouver"
          options={{
            title: 'Vancouver',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🌊</Text>,
          }}
        />

        <Tabs.Screen
          name="logout"
          options={{
            title: 'Logout',
            tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🚪</Text>,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});