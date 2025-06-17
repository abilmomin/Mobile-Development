import * as React from 'react';
import { ScrollView, Image } from 'react-native';
import CityInfo from '../components/CityInfo'; // Imported CityInfo component - johan
import CityLink from '../components/CityLink'; // Imported CityLink component - johan
import { styles } from '../styles/CityStyles'; // Imported styles - johan
 
const Calgary: React.FC = () => {
  const calgaryFacts: string[] = [
    "Home to the famous Calgary Stampede",
    "Gateway to the Canadian Rockies",
    "Has over 8,000 hectares of parkland",
    "Known as Canada's energy capital"
  ];
 
  return (
    <ScrollView style={styles.tabContainer}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop' }}
        style={styles.cityImage}
        resizeMode="cover"
      />
      
      <CityInfo
        title="Calgary, Alberta"
        description="Calgary is a vibrant city located in the heart of Alberta, known for its proximity to the Rocky Mountains and its thriving energy sector."
        facts={calgaryFacts}
      />
      
      <CityLink url="https://www.calgary.ca/home.html">
        Go to City Page
      </CityLink>
    </ScrollView>
  );
};
 
export default Calgary;