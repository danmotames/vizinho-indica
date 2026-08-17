import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@vizinho-indica:recommendations';

const seededRecommendations = [
  {
    id: '1',
    category: 'Eletricista',
    title: 'Conserto rápido de chuveiro',
    provider: 'Carlos Souza',
    contact: '(11) 99999-1001',
    description: 'Atendeu no mesmo dia e explicou todo o serviço.',
    createdAt: '2026-08-10T10:00:00.000Z',
  },
  {
    id: '2',
    category: 'Faxina',
    title: 'Limpeza pós-obra apartamento',
    provider: 'Equipe Brilho',
    contact: '(11) 98888-2002',
    description: 'Excelente capricho e organização em áreas comuns.',
    createdAt: '2026-08-12T16:30:00.000Z',
  },
  {
    id: '3',
    category: 'Encanador',
    title: 'Troca de registro da cozinha',
    provider: 'Marcelo Lima',
    contact: '(11) 97777-3003',
    description: 'Preço justo e atendimento pontual.',
    createdAt: '2026-08-14T11:15:00.000Z',
  },
];

const saveRecommendations = async (items) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const listRecommendations = async () => {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) {
    await saveRecommendations(seededRecommendations);
    return seededRecommendations;
  }

  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed : seededRecommendations;
};

export const createRecommendation = async (payload) => {
  const currentItems = await listRecommendations();

  const newItem = {
    id: `${Date.now()}`,
    category: payload.category,
    title: payload.title.trim(),
    provider: payload.provider.trim(),
    contact: payload.contact.trim(),
    description: payload.description.trim(),
    createdAt: new Date().toISOString(),
  };

  const updated = [newItem, ...currentItems];
  await saveRecommendations(updated);

  return newItem;
};

export const clearRecommendations = async () => {
  await saveRecommendations(seededRecommendations);
  return seededRecommendations;
};
