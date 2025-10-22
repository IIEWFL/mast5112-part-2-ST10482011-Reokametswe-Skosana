import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FF6B35" barStyle="light-content" />
      
      <View style={styles.content}>
        <Text style={styles.title}>🍰 Sweet Treats</Text>
        <Text style={styles.subtitle}>Order delicious desserts for your table</Text>
        
        {/* Customer Order Button */}
        <TouchableOpacity
          style={styles.customerButton}
          onPress={() => {
            const customerName = 'Table Guest';
            const tableNumber = '1';
            navigation.navigate('Menu', { customerName, tableNumber });
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.customerButtonText}>👤 Order for Table</Text>
        </TouchableOpacity>

        {/* Chef Dashboard Button */}
        <TouchableOpacity
          style={[styles.chefButton, styles.button]}
          onPress={() => navigation.navigate('Chef')}
          activeOpacity={0.8}
        >
          <Text style={styles.chefButtonText}>👨‍🍳 Chef Dashboard</Text>
        </TouchableOpacity>

        {/* Quick Demo Orders */}
        <View style={styles.demoSection}>
          <Text style={styles.demoTitle}>Quick Demo</Text>
          <TouchableOpacity
            style={[styles.demoButton, styles.button]}
            onPress={() => {
              navigation.navigate('Menu', { 
                customerName: 'John Doe', 
                tableNumber: 'Table 5' 
              });
            }}
          >
            <Text style={styles.demoButtonText}>Table 5 - John</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.demoButton, styles.button]}
            onPress={() => {
              navigation.navigate('Menu', { 
                customerName: 'Jane Smith', 
                tableNumber: 'Table 12' 
              });
            }}
          >
            <Text style={styles.demoButtonText}>Table 12 - Jane</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 48,
    textAlign: 'center',
  },
  customerButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  customerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chefButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 32,
    width: '100%',
    alignItems: 'center',
  },
  chefButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  demoSection: {
    width: '100%',
  },
  demoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  demoButton: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  demoButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default WelcomeScreen;