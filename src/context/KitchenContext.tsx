import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { CommunityMemory, INITIAL_COMMUNITY_MEMORIES } from '../data/stories';

interface KitchenContextValue {
  favorites: string[];
  toggleFavorite: (recipeId: string, recipeTitle?: string) => void;
  isFavorite: (recipeId: string) => boolean;
  checkedIngredients: Record<string, string[]>;
  toggleIngredient: (recipeId: string, ingredientId: string) => void;
  clearRecipeChecks: (recipeId: string) => void;
  recipeMultipliers: Record<string, number>;
  setRecipeMultiplier: (recipeId: string, multiplier: number) => void;
  getRecipeMultiplier: (recipeId: string) => number;
  communityMemories: CommunityMemory[];
  addCommunityMemory: (memory: Omit<CommunityMemory, 'id' | 'dateAdded'>) => void;
  liveAnnouncement: string;
}

const KitchenContext = createContext<KitchenContextValue | undefined>(undefined);

const FAVORITES_KEY = 'sundayTable_favorites_v1';
const CHECKS_KEY = 'sundayTable_checkedIngredients_v1';
const MULTIPLIERS_KEY = 'sundayTable_multipliers_v1';
const MEMORIES_KEY = 'sundayTable_memories_v1';

export const KitchenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      return saved ? JSON.parse(saved) : ['herb-roasted-chicken-shallots-figs', 'country-hearth-sourdough-boule'];
    } catch {
      return ['herb-roasted-chicken-shallots-figs', 'country-hearth-sourdough-boule'];
    }
  });

  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, string[]>>(() => {
    try {
      const saved = localStorage.getItem(CHECKS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [recipeMultipliers, setRecipeMultipliers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem(MULTIPLIERS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [communityMemories, setCommunityMemories] = useState<CommunityMemory[]>(() => {
    try {
      const saved = localStorage.getItem(MEMORIES_KEY);
      return saved ? JSON.parse(saved) : INITIAL_COMMUNITY_MEMORIES;
    } catch {
      return INITIAL_COMMUNITY_MEMORIES;
    }
  });

  const [liveAnnouncement, setLiveAnnouncement] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
      // Ignore storage quota errors
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(CHECKS_KEY, JSON.stringify(checkedIngredients));
    } catch {
      // Ignore storage quota errors
    }
  }, [checkedIngredients]);

  useEffect(() => {
    try {
      localStorage.setItem(MULTIPLIERS_KEY, JSON.stringify(recipeMultipliers));
    } catch {
      // Ignore storage quota errors
    }
  }, [recipeMultipliers]);

  useEffect(() => {
    try {
      localStorage.setItem(MEMORIES_KEY, JSON.stringify(communityMemories));
    } catch {
      // Ignore storage quota errors
    }
  }, [communityMemories]);

  const toggleFavorite = useCallback((recipeId: string, recipeTitle?: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(recipeId);
      const next = exists ? prev.filter((id) => id !== recipeId) : [...prev, recipeId];
      if (recipeTitle) {
        setLiveAnnouncement(
          exists
            ? `Removed ${recipeTitle} from your Recipe Box.`
            : `Saved ${recipeTitle} to your Recipe Box.`
        );
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (recipeId: string) => favorites.includes(recipeId),
    [favorites]
  );

  const toggleIngredient = useCallback((recipeId: string, ingredientId: string) => {
    setCheckedIngredients((prev) => {
      const current = prev[recipeId] || [];
      const exists = current.includes(ingredientId);
      const nextList = exists
        ? current.filter((id) => id !== ingredientId)
        : [...current, ingredientId];
      return {
        ...prev,
        [recipeId]: nextList,
      };
    });
  }, []);

  const clearRecipeChecks = useCallback((recipeId: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [recipeId]: [],
    }));
    setLiveAnnouncement('Cleared all checked ingredients for this recipe.');
  }, []);

  const setRecipeMultiplier = useCallback((recipeId: string, multiplier: number) => {
    setRecipeMultipliers((prev) => ({
      ...prev,
      [recipeId]: multiplier,
    }));
    setLiveAnnouncement(`Scaled recipe ingredients to ${multiplier}x batch.`);
  }, []);

  const getRecipeMultiplier = useCallback(
    (recipeId: string) => recipeMultipliers[recipeId] ?? 1,
    [recipeMultipliers]
  );

  const addCommunityMemory = useCallback(
    (memory: Omit<CommunityMemory, 'id' | 'dateAdded'>) => {
      const newEntry: CommunityMemory = {
        ...memory,
        id: `cm-${Date.now()}`,
        dateAdded: 'November 2026',
      };
      setCommunityMemories((prev) => [newEntry, ...prev]);
      setLiveAnnouncement(`Added ${memory.dishTitle} by ${memory.contributorName} to the community table.`);
    },
    []
  );

  return (
    <KitchenContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        checkedIngredients,
        toggleIngredient,
        clearRecipeChecks,
        recipeMultipliers,
        setRecipeMultiplier,
        getRecipeMultiplier,
        communityMemories,
        addCommunityMemory,
        liveAnnouncement,
      }}
    >
      {children}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {liveAnnouncement}
      </div>
    </KitchenContext.Provider>
  );
};

export function useKitchen(): KitchenContextValue {
  const ctx = useContext(KitchenContext);
  if (!ctx) {
    throw new Error('useKitchen must be used within a KitchenProvider');
  }
  return ctx;
}

