import { Alert, Pressable, Text, View } from 'react-native';

import { ScreenContainer } from '../components/ScreenContainer';
import { useRecommendations } from '../state/RecommendationsContext';
import { colors, radius, spacing, typography } from '../theme/tokens';

export const ProfileScreen = () => {
  const { items, resetRecommendations } = useRecommendations();

  const handleReset = () => {
    Alert.alert('Restaurar dados', 'Deseja restaurar as indicações iniciais?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Restaurar',
        style: 'destructive',
        onPress: async () => {
          await resetRecommendations();
        },
      },
    ]);
  };

  return (
    <ScreenContainer>
      <Text style={{ fontSize: typography.title, fontWeight: '700', color: colors.text }}>Minha comunidade</Text>
      <Text style={{ fontSize: typography.body, color: colors.mutedText, marginTop: 6 }}>
        Acompanhe a base de indicações e mantenha os dados organizados.
      </Text>

      <View
        style={{
          marginTop: spacing.lg,
          backgroundColor: colors.surface,
          borderRadius: radius.lg,
          borderWidth: 1,
          borderColor: colors.border,
          padding: spacing.lg,
        }}
      >
        <Text style={{ color: colors.mutedText, fontSize: typography.caption }}>Total de indicações</Text>
        <Text style={{ marginTop: 6, fontSize: 30, fontWeight: '700', color: colors.text }}>{items.length}</Text>
      </View>

      <Pressable
        onPress={handleReset}
        style={{
          marginTop: spacing.lg,
          borderRadius: radius.md,
          borderWidth: 1,
          borderColor: '#fecaca',
          paddingVertical: 12,
          backgroundColor: '#fef2f2',
        }}
      >
        <Text style={{ color: colors.danger, textAlign: 'center', fontWeight: '700' }}>Restaurar indicações iniciais</Text>
      </Pressable>
    </ScreenContainer>
  );
};
