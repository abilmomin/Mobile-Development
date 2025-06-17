import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CityLink from '../../components/CityLink';
import CityInfo from '../../components/CityInfo';

const calgaryFacts = [
  'Calgary is home to the world-famous Calgary Stampede, known as "The Greatest Outdoor Show on Earth"',
  'The city sits at an elevation of approximately 1,045 meters (3,428 feet) above sea level',
  'Calgary Tower stands 191 meters tall and offers panoramic views of the city and Rocky Mountains',
  'The city has more than 8,000 hectares of parkland and green space',
  'Calgary hosted the 1988 Winter Olympic Games',
  'It\'s known as the energy capital of Canada with many oil and gas companies headquartered here',
  'The Bow River flows through the heart of the city',
];

export default function CalgaryTab() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>🏔️ Calgary Skyline</Text>
          <Text style={styles.imageSubtext}>Beautiful city with Rocky Mountain backdrop</Text>
        </View>
      </View>

      <CityLink url="https://www.calgary.ca/home.html" />
      
      <CityInfo facts={calgaryFacts} />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Discover the vibrant city of Calgary!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#BBDEFB',
    borderStyle: 'dashed',
  },
  imageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  imageSubtext: {
    fontSize: 14,
    color: '#424242',
    textAlign: 'center',
  },
  footer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});