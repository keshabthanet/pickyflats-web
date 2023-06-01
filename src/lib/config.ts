export type APPWRITE_ENV_MODE = 'CLOUD' | 'LOCAL';
export const appwriteConfig = {
  CLOUD: {
    API_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT,
    PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    collections: {
      LISTINGS_ID: '',
    },
  },
  LOCAL: {
    API_ENDPOINT: 'https://localhost/v1',
    PROJECT_ID: 'pickyflats-dev',
    DATABASE_ID: 'pickyflats_web',
    collections: {
      LISTINGS_ID: '',
    },
  },
};
