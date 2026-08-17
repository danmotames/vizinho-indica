import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import {
  clearRecommendations,
  createRecommendation,
  listRecommendations,
} from '../services/recommendationsService';

const RecommendationsContext = createContext(null);

export const RecommendationsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await listRecommendations();
      setItems(data);
      setLoading(false);
    };

    load();
  }, []);

  const addRecommendation = async (payload) => {
    const created = await createRecommendation(payload);
    setItems((previous) => [created, ...previous]);
    return created;
  };

  const resetRecommendations = async () => {
    const seeded = await clearRecommendations();
    setItems(seeded);
  };

  const value = useMemo(
    () => ({
      items,
      loading,
      addRecommendation,
      resetRecommendations,
    }),
    [items, loading],
  );

  return <RecommendationsContext.Provider value={value}>{children}</RecommendationsContext.Provider>;
};

export const useRecommendations = () => {
  const context = useContext(RecommendationsContext);
  if (!context) {
    throw new Error('useRecommendations must be used inside RecommendationsProvider');
  }
  return context;
};
