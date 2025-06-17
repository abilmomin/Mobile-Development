import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CityLink from '../../components/CityLink';
import CityInfo from '../../components/CityInfo';

const vancouverFacts = [
  'Vancouver is consistently ranked as one of the world\'s most liveable cities',
  'The city hosted the 2010 Winter Olympic and Paralympic Games',
  'Stanley Park is one of the largest urban parks in North America at 405 hectares',
  'Vancouver has the mildest climate of any major Canadian city',
  'The city is surrounded by water on three sides and mountains on the fourth',
  'It\'s home to the world\'s longest uninterrupted waterfront path at 28 kilometers',
  'Vancouver has more than 230 parks covering over 1,300 hectares',
  'The city is known for its diverse multicultural population',
];

export default function VancouverTab() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>🌊 Vancouver Harbor</Text>
          <Text style={styles.imageSubtext}>Mountains meet the Pacific Ocean</Text>
        </View>
      </View>

      <CityLink url="https://vancouver.ca/" />
      
      <CityInfo facts={vancouverFacts} />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Experience the natural beauty of Vancouver!</Text>
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
    backgroundColor: '#E8F5E8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A5D6A7',
    borderStyle: 'dashed',
  },
  imageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
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