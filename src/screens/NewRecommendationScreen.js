import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { ScreenContainer } from '../components/ScreenContainer';
import { useRecommendations } from '../state/RecommendationsContext';
import { colors, radius, spacing, typography } from '../theme/tokens';

const categories = ['Eletricista', 'Encanador', 'Pintura', 'Faxina', 'Pet', 'Outros'];

const inputStyle = {
  borderWidth: 1,
  borderColor: colors.border,
  borderRadius: radius.md,
  backgroundColor: colors.surface,
  paddingHorizontal: spacing.md,
  paddingVertical: 12,
  marginTop: 6,
  marginBottom: 12,
};

export const NewRecommendationScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [provider, setProvider] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const { addRecommendation } = useRecommendations();

  const handleSubmit = async () => {
    if (!title.trim() || !provider.trim() || !contact.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha título, profissional e contato para continuar.');
      return;
    }

    await addRecommendation({ title, provider, contact, description, category });

    setTitle('');
    setProvider('');
    setContact('');
    setDescription('');
    setCategory(categories[0]);

    Alert.alert('Indicação criada', 'Sua recomendação foi salva com sucesso.');
    navigation.navigate('Recomendações');
  };

  return (
    <ScreenContainer>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={{ paddingBottom: 32 }} keyboardShouldPersistTaps="handled">
          <Text style={{ fontSize: typography.title, fontWeight: '700', color: colors.text }}>Nova indicação</Text>
          <Text style={{ fontSize: typography.body, color: colors.mutedText, marginTop: 6, marginBottom: 16 }}>
            Compartilhe um contato confiável do seu condomínio.
          </Text>

          <Text style={{ fontSize: typography.body, fontWeight: '600', color: colors.text }}>Categoria</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8, marginBottom: 14 }}>
            {categories.map((item) => {
              const selected = item === category;
              return (
                <Pressable
                  key={item}
                  onPress={() => setCategory(item)}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 999,
                    borderWidth: 1,
                    borderColor: selected ? colors.brandDark : colors.border,
                    backgroundColor: selected ? colors.brandSoft : colors.surface,
                  }}
                >
                  <Text style={{ color: selected ? colors.brandDark : colors.text, fontWeight: selected ? '700' : '500' }}>
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={{ fontSize: typography.body, fontWeight: '600', color: colors.text }}>Título</Text>
          <TextInput value={title} onChangeText={setTitle} placeholder="Ex: Limpeza pós-obra" style={inputStyle} />

          <Text style={{ fontSize: typography.body, fontWeight: '600', color: colors.text }}>Profissional ou empresa</Text>
          <TextInput value={provider} onChangeText={setProvider} placeholder="Ex: João da Silva" style={inputStyle} />

          <Text style={{ fontSize: typography.body, fontWeight: '600', color: colors.text }}>Contato</Text>
          <TextInput
            value={contact}
            onChangeText={setContact}
            placeholder="Ex: (11) 99999-9999"
            keyboardType="phone-pad"
            style={inputStyle}
          />

          <Text style={{ fontSize: typography.body, fontWeight: '600', color: colors.text }}>Observações</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Conte como foi sua experiência"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            style={[inputStyle, { minHeight: 100 }]}
          />

          <Pressable
            onPress={handleSubmit}
            style={{
              marginTop: 8,
              backgroundColor: colors.brand,
              borderRadius: radius.md,
              paddingVertical: 14,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontSize: typography.body, fontWeight: '700' }}>Salvar indicação</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};
