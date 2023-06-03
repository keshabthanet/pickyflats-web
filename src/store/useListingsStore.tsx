import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

interface ListingsStore {
  listings: any[];
  activeTypeFilter: string;
  setListings: (listings: any[]) => void;
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
