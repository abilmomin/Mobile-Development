import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/CityStyles'; 

interface CityInfoProps {
  title: string;
  description: string;
  facts?: string[];
}

const CityInfo: React.FC<CityInfoProps> = ({ title, description, facts }) => {
  return (
    <View style={styles.cityInfoContainer}>
      <Text style={styles.cityInfoTitle}>{title}</Text>
      <Text style={styles.cityInfoDescription}>{description}</Text>
      {facts && (
        <View style={styles.factsContainer}>
          <Text style={styles.factsTitle}>Interesting Facts:</Text>
          {facts.map((fact: string, index: number) => (
            <Text key={index} style={styles.factItem}>• {fact}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default CityInfo;