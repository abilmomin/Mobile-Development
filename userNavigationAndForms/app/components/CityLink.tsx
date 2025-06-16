import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';
import { styles } from '../styles/ComponentStyles';

interface CityLinkProps {
  url: string;
  children: React.ReactNode;
}

const CityLink: React.FC<CityLinkProps> = ({ url, children }) => {
  const handlePress = (): void => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.linkButton}>
      <Text style={styles.linkText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CityLink;