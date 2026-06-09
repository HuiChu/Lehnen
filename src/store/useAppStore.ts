import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Settings {
  /** 朗讀語速 0.5–1.5 */
  rate: number;
  /** 預設是否顯示中文對照 */
  showTranslation: boolean;
  /** 是否顯示文法標記（名詞性別、介係詞格上色） */
  showGrammar: boolean;
  /** 偏好的德語 voice 名稱（空字串=自動挑選） */
  voiceName: string;
}

interface AppState {
  /** 已收藏的語塊 id 集合 */
  favorites: string[];
  /** 已練習過的語塊 id（用於進度統計） */
  practiced: string[];
  settings: Settings;

  toggleFavorite: (chunkId: string) => void;
  isFavorite: (chunkId: string) => boolean;
  markPracticed: (chunkId: string) => void;
  updateSettings: (patch: Partial<Settings>) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      favorites: [],
      practiced: [],
      settings: {
        rate: 0.9,
        showTranslation: true,
        showGrammar: true,
        voiceName: '',
      },

      toggleFavorite: (chunkId) =>
        set((state) => ({
          favorites: state.favorites.includes(chunkId)
            ? state.favorites.filter((id) => id !== chunkId)
            : [...state.favorites, chunkId],
        })),

      isFavorite: (chunkId) => get().favorites.includes(chunkId),

      markPracticed: (chunkId) =>
        set((state) =>
          state.practiced.includes(chunkId)
            ? state
            : { practiced: [...state.practiced, chunkId] }
        ),

      updateSettings: (patch) =>
        set((state) => ({ settings: { ...state.settings, ...patch } })),
    }),
    {
      name: 'lehnen-store',
      // 深層合併 settings，讓新增的設定鍵（如 showGrammar）對舊使用者也帶預設值
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<AppState>;
        return {
          ...current,
          ...p,
          settings: { ...current.settings, ...(p.settings ?? {}) },
        };
      },
    }
  )
);
