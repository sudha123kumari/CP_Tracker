import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

import StackNavigationHandler from './src/handlers/StackNavigationHandler';

export default function App() {
  return (
    <StackNavigationHandler/>
  );
}

