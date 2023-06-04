/* eslint-disable @typescript-eslint/no-explicit-any */
import create from 'zustand';
// import { persist,  } from 'zustand/middleware'
import { persist } from 'zustand/middleware';

// import { useStudentMeQuery } from 'generatedGraphql/graphql'

// interface part
export interface Ibasic {
  name: string;

  email: string;
  dateOfBirth: string | null;
  contactNo: string;

  country?: string;
  streetAddressLine?: string;
}

export interface Iphoto {
  id?: string;
  keyName?: string;
}

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
  collegeId: string;
  courseId: string;
  consultancyId: string | null;
  scholarshipId: string;
  applicationId: string;

  updatedAt: string | null;

  identitys: Array<IIdentities>;

  basicDetail: Ibasic;
  // scholarship: Ischolarship

  photo: Iphoto;

  steps: number;
  openAppModal: boolean;
};

export interface Ischolarship {
  id: string;
  name: string;
}

type Actions = {
  setCollegeId: (collegId: string) => void;
  setCourseId: (courseId: string) => void;
  setConsultancyId: (consultancyId: string | null) => void;
  setScholarshipId: (scholarshipId: string) => void;
  setApplicationId: (applicationId: string) => void;

  setUpdatedAt: (updatedAt: string | null) => void;

  setIdentitys: (identity: Array<IIdentities>) => void;

  setBasicDetails: (basicDetail: Ibasic) => void;
  // setScholarship: (scholarship: Ischolarship) => void

  setPhoto: (photo: Iphoto) => void;

  setSteps: (steps: number) => void;
  setOpenAppModal: (open: boolean) => void;
};

export const useApplicationStore = create<Store & Actions>()(
  persist(
    (set) => ({
      collegeId: '',
      courseId: '',
      consultancyId: null,
      scholarshipId: '',
      applicationId: '',
      updatedAt: null,

      families: [],
      experiences: [],
      eligibilities: [],
      academics: [],
      essays: [],
      lors: [],
      identitys: [],
      documents: [],
      languages: [],

      basicDetail: { name: '', email: '', dateOfBirth: '', contactNo: '' },

      photo: { id: '', keyName: '' },

      steps: 1,
      openAppModal: false,

      setCollegeId: (collegeId: string) => set({ collegeId }),
      setCourseId: (courseId: string) => set({ courseId }),
      setConsultancyId: (consultancyId: string | null) =>
        set({ consultancyId }),
      setScholarshipId: (scholarshipId: string) => set({ scholarshipId }),
      setApplicationId: (applicationId: string) => set({ applicationId }),
      setUpdatedAt: (updatedAt: string | null) => set({ updatedAt }),

      setIdentitys: (identity: Array<IIdentities>) =>
        set({ identitys: [...identity] }),

      setBasicDetails: (basicDetail: Ibasic) => set({ basicDetail }),
      // setScholarship: (scholarship: Ischolarship) => set({ scholarship }),

      setPhoto: (photo: Iphoto) => set({ photo }),

      setSteps: (steps: number) => set({ steps }),
      setOpenAppModal: (openAppModal: boolean) => set({ openAppModal }),
    }),
    {
      name: 'application-storage',
    }
  )
);
