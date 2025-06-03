import { View, Text } from 'react-native';
import FruitList from '../components/FruitLists';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 100, alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to the Fruit App!</Text>
      <FruitList />
    </View>
  );
}