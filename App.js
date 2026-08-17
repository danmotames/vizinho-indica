import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigator } from './src/navigation/AppNavigator';
import { RecommendationsProvider } from './src/state/RecommendationsContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <RecommendationsProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <AppNavigator />
        </NavigationContainer>
      </RecommendationsProvider>
    </SafeAreaProvider>
  );
}
