import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

import { Listing } from '@/types/listing';

interface ListingsStore {
  listings: Listing[];
  activeTypeFilter: string;
  setListings: (listings: Listing[]) => void;
  setTypeFilter: (type: string) => void;
}

const useListingsStoreBase = create<ListingsStore>((set) => ({
  listings: [],
  activeTypeFilter: '',
  setListings: (listings) => set(() => ({ listings })),
  setTypeFilter: (type) => set(() => ({ activeTypeFilter: type })),
}));

const useListingsStore = createSelectorHooks(useListingsStoreBase);

export default useListingsStore;
