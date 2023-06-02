export type APPWRITE_ENV_MODE = 'CLOUD' | 'LOCAL';
export const appwriteConfig = {
  CLOUD: {
    API_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT,
    PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    collections: {
      LISTINGS_ID: '6478c70cd7fda33eac70',
      MESSAGES_ID: '6478c731211f0492f811',
      COMMENTS_ID: '6478c835e366e8980dcb',
    },
  },
  LOCAL: {
    API_ENDPOINT: 'https://localhost/v1',
    PROJECT_ID: 'pickyflats-dev',
    DATABASE_ID: 'pickyflats_web',
    collections: {
      LISTINGS_ID: '',
      MESSAGES_ID: '',
      COMMENTS_ID: '',
    },
  },
};
