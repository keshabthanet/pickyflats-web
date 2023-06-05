/* eslint-disable @typescript-eslint/no-explicit-any */
import create from 'zustand';
// import { persist,  } from 'zustand/middleware'
import { persist } from 'zustand/middleware';

export interface IIdentities {
  id: string;

  identityNo: string;
  issueFrom: string;
  issueDate: string;
  expireDate: string | null;
  frontFace: { id?: string; keyName?: string };
  backFace?: { id?: string; keyName?: string };
}

// store part
type Store = {
  purpose: 'sell' | 'rent';
  flatTypes: number[];

  // identitys: Array<IIdentities>;

  // steps: number;
  // openAppModal: boolean;
};

type Actions = {
  setPurpose: (purpose: 'sell' | 'rent') => void;
  setFlatTypes: (flatIds: number[]) => void;

  // setIdentitys: (identity: Array<IIdentities>) => void;

  // setSteps: (steps: number) => void;
  // setOpenAppModal: (open: boolean) => void;
};

export const useApplicationStore = create<Store & Actions>()(
  persist(
    (set) => ({
      purpose: 'rent',
      flatTypes: [1, 2],
      // identitys: [],
      // steps: 1,
      // openAppModal: false,

      setPurpose: (purpose: 'sell' | 'rent') => set({ purpose }),
      setFlatTypes: (flatTypes: number[]) => set({ flatTypes }),
      // setIdentitys: (identity: Array<IIdentities>) =>
      //   set({ identitys: [...identity] }),
      // setSteps: (steps: number) => set({ steps }),
      // setOpenAppModal: (openAppModal: boolean) => set({ openAppModal }),
    }),
    {
      name: 'flat-store',
    }
  )
);
