/* eslint-disable @typescript-eslint/no-explicit-any */
import create from 'zustand';
// import { persist,  } from 'zustand/middleware'
import { persist } from 'zustand/middleware';

export interface Iamenities {
  id: number;
  name: string;
  flatType: number[];
  checked: boolean;
}
// export interface IcontactAndLocation {
//   phone: string;
//   email: string;
//   country: string;
//   city: string;
//   flatCountry: string;
//   flatCity: string;
//   flatAdd1: string;
//   flatAdd2: string;
// }

export interface Ipolicies {
  id: number;
  name: string;
  flatType: number[];
  checked: boolean;
}

export interface Icosts {
  currency: string;
  purchaseCost?: number | null | undefined;
  // rentCost?: number | null | undefined;
  monthlyCost?: number | null | undefined;
  yearlyCost?: number | null | undefined;
  mortgagePayments?: number | null | undefined;
  utilityCost?: number | null | undefined;
  insuranceCost?: number | null | undefined;
  propertyTax?: number | null | undefined;
  internetCost?: number | null | undefined;
  parkingFee?: number | null | undefined;
  petFee?: number | null | undefined;
  communalFacilityFee?: number | null | undefined;
  cleaningFee?: number | null | undefined;
  homeImprovement?: number | null | undefined;
  furnitureAppliances?: number | null | undefined;
  legalFees?: number | null | undefined;
  movingCosts?: number | null | undefined;
  securitySystem?: number | null | undefined;
  homeOfficeSetup?: number | null | undefined;
  maintenanceRepairs?: number | null | undefined;
  otherCosts?: number | null | undefined;
}

export interface IcontactAndLocation {
  //agent contact
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  street1: string;
  //flat details
  flatCountry: string;
  flatCity: string;
  flatStreet1: string;
  flatStreet2: string;
}

// store part
type Store = {
  purpose: 'sell' | 'rent';
  flatTypes: number[];

  buildingAmenities: Array<Iamenities>;
  flatAmenities: Array<Iamenities>;
  flatPolicies: Array<Iamenities>;

  costs: Icosts;

  contactAndLocation: IcontactAndLocation;

  steps: number;
  openAppModal: boolean;
};

type Actions = {
  setPurpose: (purpose: 'sell' | 'rent') => void;
  setFlatTypes: (flatIds: number[]) => void;

  setBuildingAmenities: (amenities: Array<Iamenities>) => void;
  setFlatAmenities: (amenities: Array<Iamenities>) => void;
  setFlatPolicies: (amenities: Array<Iamenities>) => void;

  setCosts: (costs: Icosts) => void;

  setContactAndLocation: (contact: IcontactAndLocation) => void;

  setSteps: (steps: number) => void;
  setOpenAppModal: (open: boolean) => void;
};

export const useFlatStore = create<Store & Actions>()(
  persist(
    (set) => ({
      purpose: 'rent',
      flatTypes: [1],
      buildingAmenities: [],
      flatAmenities: [],
      flatPolicies: [],

      costs: { currency: '$' },

      contactAndLocation: {
        country: '',
        city: '',
        street1: '',
        phoneNumber: '',
        email: '',
        flatCountry: '',
        flatCity: '',
        flatStreet1: '',
        flatStreet2: '',
      },

      steps: 1,
      openAppModal: false,

      setPurpose: (purpose: 'sell' | 'rent') => set({ purpose }),
      setFlatTypes: (flatTypes: number[]) => set({ flatTypes }),
      setBuildingAmenities: (amenities: Array<Iamenities>) =>
        set({ buildingAmenities: [...amenities] }),
      setFlatAmenities: (amenities: Array<Iamenities>) =>
        set({ flatAmenities: [...amenities] }),

      setFlatPolicies: (policies: Array<Ipolicies>) =>
        set({ flatPolicies: [...policies] }),

      setCosts: (costs: Icosts) => set({ costs }),
      setContactAndLocation: (ContactAndLocation: IcontactAndLocation) =>
        set({ contactAndLocation: ContactAndLocation }),

      setSteps: (steps: number) => set({ steps }),
      setOpenAppModal: (openAppModal: boolean) => set({ openAppModal }),
    }),
    {
      name: 'flat-store',
    }
  )
);
