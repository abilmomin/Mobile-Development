import { ScrollView, Image } from 'react-native';
import CityInfo from '../components/CityInfo'; // Imported CityInfo component - johan
import CityLink from '../components/CityLink'; // Imported CityLink component - johan
import { styles } from '../styles/CityStyles'; // Imported styles - johan
 
const Vancouver: React.FC = () => {
  const vancouverFacts: string[] = [
    "Consistently ranked as one of the world's most livable cities",
    "Surrounded by mountains and ocean",
    "Host city of the 2010 Winter Olympics",
    "Home to the largest urban park in North America"
  ];
 
  return (
    <ScrollView style={styles.tabContainer}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=250&fit=crop' }}
        style={styles.cityImage}
        resizeMode="cover"
      />
      
      <CityInfo
        title="Vancouver, British Columbia"
        description="Vancouver is a coastal seaport city in western Canada, renowned for its natural beauty, diverse culture, and outdoor recreation opportunities."
        facts={vancouverFacts}
      />
      
      <CityLink url="https://vancouver.ca/">
        Go to City Page
      </CityLink>
    </ScrollView>
  );
};
 
export default Vancouver;