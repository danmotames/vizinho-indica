import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { NewRecommendationScreen } from '../screens/NewRecommendationScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { RecommendationDetailScreen } from '../screens/RecommendationDetailScreen';
import { colors } from '../theme/tokens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabs = [
  { name: 'Recomendações', component: HomeScreen, icon: 'home-outline' },
  { name: 'Indicar', component: NewRecommendationScreen, icon: 'add-circle-outline' },
  { name: 'Perfil', component: ProfileScreen, icon: 'person-outline' },
];

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.brandDark,
        tabBarInactiveTintColor: '#64748b',
        tabBarIcon: ({ color, size }) => {
          const current = tabs.find((tab) => tab.name === route.name);
          return <Ionicons name={current?.icon ?? 'ellipse-outline'} size={size} color={color} />;
        },
      })}
    >
      {tabs.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Detalhe" component={RecommendationDetailScreen} options={{ title: 'Detalhes da indicação' }} />
    </Stack.Navigator>
  );
};
