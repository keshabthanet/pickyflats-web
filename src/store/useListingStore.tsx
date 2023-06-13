import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

import { Comment } from '@/database/comment';

interface ListingStore {
  comments: Comment[] | null;
  setComments: (comments: Comment[] | null) => void;
  //
  refreshCount: number;
  refresh: () => void;
}

const useListingStoreBase = create<ListingStore>((set) => ({
  comments: [],
  setComments: (comments) => set(() => ({ comments })),
  //
  refreshCount: 0,
  refresh: () => {
    set((state) => ({ refreshCount: state.refreshCount + 1 }));
  },
}));

const useListingStore = createSelectorHooks(useListingStoreBase);

export default useListingStore;
