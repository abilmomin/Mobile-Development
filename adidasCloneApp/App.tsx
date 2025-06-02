import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [timeLeft, setTimeLeft] = useState('48:53:29');

  useEffect(() => {
    // Used chapgpt to help me implement the countdown timer
    const endTime = new Date().getTime() + (48 * 60 * 60 * 1000) + (53 * 60 * 1000) + (29 * 1000);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
      
      if (distance > 0) {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft(
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      } else {
        setTimeLeft('00:00:00');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const showAlert = () => {
    Alert.alert('Success', 'Assignment 1 Completed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello Group 9</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.profileIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Promotional Banner */}
        <View style={styles.promoBanner}>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>APP EXCLUSIVE: 25% OFF</Text>
            <Text style={styles.promoTimer}>DEAL ENDS IN {timeLeft}</Text>
            <Text style={styles.promoSubtext}>Save with code OFFER. Exclusions apply.</Text>
            <TouchableOpacity style={styles.copyCodeButton} onPress={showAlert}>
              <Text style={styles.copyCodeText}>COPY CODE</Text>
              <View style={styles.copyIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Shop All Section */}
        <View style={styles.categorySection}>
          <View style={styles.categoryLeft}>
            <View style={styles.percentIcon}>
              <Text style={styles.percentText}>%</Text>
            </View>
            <Text style={styles.categoryTitle}>SHOP ALL</Text>
          </View>
          <View style={styles.categoryRight}>
            <View style={styles.productImage}>
              <View style={styles.shoeImage}>
                <Text style={styles.shoeText}>ADIDAS</Text>
                <Text style={styles.shoeSubText}>FOOTBALL BOOT</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Shop Men Section */}
        <View style={styles.categorySection}>
          <View style={styles.categoryLeft}>
            <View style={styles.percentIcon}>
              <Text style={styles.percentText}>%</Text>
            </View>
            <Text style={styles.categoryTitle}>SHOP MEN</Text>
          </View>
          <View style={styles.categoryRight}>
            <View style={styles.productImage}>
              <View style={styles.shoeImage}>
                <Text style={styles.shoeText}>ADIDAS</Text>
                <Text style={styles.shoeSubText}>FOOTBALL BOOT</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Shop Women Section */}
        <View style={styles.categorySection}>
          <View style={styles.categoryLeft}>
            <View style={styles.percentIcon}>
              <Text style={styles.percentText}>%</Text>
            </View>
            <Text style={styles.categoryTitle}>SHOP WOMEN</Text>
          </View>
          <View style={styles.categoryRight}>
            <View style={styles.productImage}>
              <View style={styles.shoeImageDark}>
                <Text style={styles.shoeTextDark}>ADIDAS</Text>
                <Text style={styles.shoeSubTextDark}>FOOTBALL BOOT</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Shop Kids Section */}
        <View style={styles.categorySection}>
          <View style={styles.categoryLeft}>
            <View style={styles.percentIcon}>
              <Text style={styles.percentText}>%</Text>
            </View>
            <Text style={styles.categoryTitle}>SHOP KIDS</Text>
          </View>
          <View style={styles.categoryRight}>
            <View style={styles.productImage}>
              <View style={styles.shoeImage}>
                <Text style={styles.shoeText}>ADIDAS</Text>
                <Text style={styles.shoeSubText}>FOOTBALL BOOT</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.adidasLogo}>
            <Text style={styles.adidasText}>⚫</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}>
            <View style={styles.searchNavIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}>
            <View style={styles.heartIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}>
            <View style={styles.bagIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.adiClubText}>adiclub</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 1,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  searchIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000000',
  },
  profileIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  promoBanner: {
    backgroundColor: '#000000',
    margin: 20,
    marginBottom: 10,
    borderRadius: 0,
  },
  promoContent: {
    padding: 20,
  },
  promoTitle: {
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  promoTimer: {
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  promoSubtext: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 20,
  },
  copyCodeButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
  copyCodeText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  copyIcon: {
    width: 16,
    height: 16,
    backgroundColor: '#000000',
  },
  categorySection: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 15,
    height: 120,
  },
  categoryLeft: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  categoryRight: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  percentIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#ff0000',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  percentText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  productImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shoeImage: {
    width: 120,
    height: 80,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  shoeImageDark: {
    width: 120,
    height: 80,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  shoeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  shoeSubText: {
    fontSize: 8,
    color: '#666666',
  },
  shoeTextDark: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  shoeSubTextDark: {
    fontSize: 8,
    color: '#cccccc',
  },
  bottomSpacing: {
    height: 50,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  adidasLogo: {
    alignItems: 'center',
  },
  adidasText: {
    fontSize: 20,
    color: '#000000',
  },
  navIcon: {
    alignItems: 'center',
  },
  searchNavIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666666',
  },
  heartIcon: {
    width: 20,
    height: 18,
    borderWidth: 2,
    borderColor: '#666666',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transform: [{ rotate: '45deg' }],
  },
  bagIcon: {
    width: 18,
    height: 20,
    borderWidth: 2,
    borderColor: '#666666',
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  adiClubText: {
    fontSize: 10,
    color: '#000000',
    fontWeight: '500',
  },
  homeIndicator: {
    width: 150,
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 8,
  },
});