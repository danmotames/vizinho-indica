import { Pressable, Text, View } from 'react-native';

import { ScreenContainer } from '../components/ScreenContainer';
import { colors, radius, spacing, typography } from '../theme/tokens';

export const RecommendationDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScreenContainer>
      <View
        style={{
          backgroundColor: colors.surface,
          borderRadius: radius.lg,
          borderWidth: 1,
          borderColor: colors.border,
          padding: spacing.lg,
        }}
      >
        <Text style={{ fontSize: typography.caption, color: colors.brandDark }}>{item.category}</Text>
        <Text style={{ fontSize: typography.title, fontWeight: '700', color: colors.text, marginTop: 8 }}>{item.title}</Text>

        <View style={{ marginTop: spacing.lg }}>
          <Text style={{ fontSize: typography.caption, color: colors.mutedText }}>Profissional/empresa</Text>
          <Text style={{ fontSize: typography.body, color: colors.text, marginTop: 4 }}>{item.provider}</Text>
        </View>

        <View style={{ marginTop: spacing.md }}>
          <Text style={{ fontSize: typography.caption, color: colors.mutedText }}>Contato</Text>
          <Text style={{ fontSize: typography.body, color: colors.whatsapp, marginTop: 4 }}>{item.contact}</Text>
        </View>

        <View style={{ marginTop: spacing.md }}>
          <Text style={{ fontSize: typography.caption, color: colors.mutedText }}>Observações</Text>
          <Text style={{ fontSize: typography.body, color: colors.text, marginTop: 4 }}>
            {item.description || 'Sem observações adicionais.'}
          </Text>
        </View>

        <Pressable
          style={{
            marginTop: spacing.lg,
            backgroundColor: colors.brandSoft,
            borderRadius: radius.md,
            padding: spacing.md,
          }}
        >
          <Text style={{ color: colors.brandDark, fontWeight: '700', textAlign: 'center' }}>Recomendação confiável da vizinhança</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
};
