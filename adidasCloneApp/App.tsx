import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
        <Text style={styles.headerTitle}>Group6Studios</Text>

        <View style={styles.searchWrapper}>
          <TouchableOpacity
            style={styles.searchBar}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={styles.searchText}>Search for stuff</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="person" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity><Text style={styles.dropdownItem}>Shoes</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.dropdownItem}>Jackets</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.dropdownItem}>Accessories</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.dropdownItem}>Kids</Text></TouchableOpacity>
        </View>
      )}

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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

        {/* Shop All */}
        <View style={styles.categorySection}>
          <View style={styles.categoryLeft}>
            <View style={styles.percentIcon}>
              <Icon name="local-offer" size={18} color="#fff" />
            </View>
            <Text style={styles.categoryTitle}>SHOP ALL</Text>
          </View>
          <View style={styles.categoryRight}>
            <View style={styles.productImage}>
              <View style={styles.shoeImage}>
                <Icon name="storefront" size={40} color="#000" />
              </View>
            </View>
          </View>
        </View>

        {/* Shop Men */}
        <View style={styles.categorySection}>
          <View style={styles.categoryLeft}>
            <View style={styles.percentIcon}>
              <Icon name="local-offer" size={18} color="#fff" />
            </View>
            <Text style={styles.categoryTitle}>SHOP MEN</Text>
          </View>
          <View style={styles.categoryRight}>
            <View style={styles.productImage}>
              <View style={styles.shoeImage}>
                <Icon name="man" size={40} color="#000" />
              </View>
            </View>
          </View>
        </View>

        {/* Shop Women */}
        <View style={styles.categorySection}>
          <View style={styles.categoryLeft}>
            <View style={styles.percentIcon}>
              <Icon name="local-offer" size={18} color="#fff" />
            </View>
            <Text style={styles.categoryTitle}>SHOP WOMEN</Text>
          </View>
          <View style={styles.categoryRight}>
            <View style={styles.productImage}>
              <View style={styles.shoeImageDark}>
                <Icon name="woman" size={40} color="#fff" />
              </View>
            </View>
          </View>
        </View>

        {/* Shop Kids */}
        <View style={styles.categorySection}>
          <View style={styles.categoryLeft}>
            <View style={styles.percentIcon}>
              <Icon name="local-offer" size={18} color="#fff" />
            </View>
            <Text style={styles.categoryTitle}>SHOP KIDS</Text>
          </View>
          <View style={styles.categoryRight}>
            <View style={styles.productImage}>
              <View style={styles.shoeImage}>
                <Icon name="child-care" size={40} color="#000" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="search" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="favorite-border" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="shopping-bag" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
  },

  headerTitle: {
    fontSize: 18, fontWeight: 'bold', color: '#000000', letterSpacing: 1,
  },

  searchWrapper: { flex: 1, marginHorizontal: 10 },

  searchBar: {
    backgroundColor: '#f9f9f9',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchText: { color: '#999999', fontSize: 16 },

  dropdown: {
    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#cccccc',
    borderWidth: 1,
    zIndex: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  dropdownItem: {
    paddingVertical: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    color: '#000000',
  },

  headerIcons: { flexDirection: 'row' },
  iconButton: { marginLeft: 15 },

  scrollView: { flex: 1 },

  promoBanner: {
    backgroundColor: '#000000',
    margin: 20,
    marginBottom: 10,
  },

  promoContent: { padding: 20 },

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

  promoSubtext: { color: '#ffffff', fontSize: 14, marginBottom: 20 },

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

  copyIcon: { width: 16, height: 16, backgroundColor: '#000000' },

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

  categoryTitle: { fontSize: 16, fontWeight: 'bold', color: '#000000' },

  productImage: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  shoeImage: {
    width: 120,
    height: 80,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
  },

  shoeImageDark: {
    width: 120,
    height: 80,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 2,
  },

  bottomSpacing: { height: 50 },

  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  navItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
