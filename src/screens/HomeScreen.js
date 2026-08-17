import { useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, View } from 'react-native';

import { RecommendationCard } from '../components/RecommendationCard';
import { ScreenContainer } from '../components/ScreenContainer';
import { useRecommendations } from '../state/RecommendationsContext';
import { colors, radius, spacing, typography } from '../theme/tokens';

export const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const { items, loading } = useRecommendations();

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return items;

    return items.filter((item) =>
      [item.title, item.provider, item.category, item.contact].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [items, query]);

  return (
    <ScreenContainer>
      <Text style={{ fontSize: typography.title, fontWeight: '700', color: colors.text }}>Indicações do condomínio</Text>
      <Text style={{ fontSize: typography.body, color: colors.mutedText, marginTop: 6, marginBottom: 12 }}>
        Encontre recomendações confiáveis sem depender do histórico do WhatsApp.
      </Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Buscar por serviço, nome ou contato"
        style={{
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: radius.md,
          backgroundColor: colors.surface,
          paddingHorizontal: spacing.md,
          paddingVertical: 12,
          marginBottom: 12,
        }}
      />

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color={colors.brandDark} />
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <RecommendationCard
              item={item}
              onPress={() => {
                navigation.navigate('Detalhe', { item });
              }}
            />
          )}
          ListEmptyComponent={
            <Text style={{ marginTop: spacing.lg, color: colors.mutedText, textAlign: 'center' }}>
              Nenhuma indicação encontrada para essa busca.
            </Text>
          }
        />
      )}
    </ScreenContainer>
  );
};
