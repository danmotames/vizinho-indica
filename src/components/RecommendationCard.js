import { Pressable, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '../theme/tokens';

export const RecommendationCard = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,
        padding: spacing.md,
        marginBottom: spacing.sm,
      }}
    >
      <Text style={{ fontSize: typography.caption, color: colors.brandDark, marginBottom: 4 }}>{item.category}</Text>
      <Text style={{ fontSize: typography.subtitle, fontWeight: '700', color: colors.text }}>{item.title}</Text>
      <Text style={{ fontSize: typography.body, color: colors.mutedText, marginTop: 4 }}>{item.provider}</Text>
      <Text style={{ fontSize: typography.caption, color: colors.mutedText, marginTop: 2 }}>{item.contact}</Text>
    </Pressable>
  );
};
