import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import WelcomeScreen from './screens/WelcomeScreen';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import ChefScreen from './screens/ChefScreen';

// ----------------------
// Type Definitions
// ----------------------
export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  description?: string;
  category?: string;
};

export type RootStackParamList = {
  Welcome: undefined;
  Menu: { customerName: string; tableNumber: string };
  Cart: { cart: CartItem[]; customerName: string; tableNumber: string };
  Chef: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Chef" component={ChefScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;