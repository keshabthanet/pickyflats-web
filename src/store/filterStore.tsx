import create from 'zustand';

type Store = {
  openModal: boolean;
};

type Actions = {
  setOpenModal: (openModal: boolean) => void;
};

export const useFilterModalStore = create<Store & Actions>()((set) => ({
  openModal: false,
  setOpenModal: (openModal: boolean) => set({ openModal }),
}));
