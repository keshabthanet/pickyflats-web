export type APPWRITE_ENV_MODE = 'CLOUD' | 'LOCAL';
export const appwriteConfig = {
  CLOUD: {
    API_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT,
    PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    collections: {
      PROFILES_ID: '647c063d490ee20fd175',
      LISTINGS_ID: '6478c70cd7fda33eac70',
      COMMENTS_ID: '6478c835e366e8980dcb',
      // chat
      CONVERSATIONS_ID: 'CONVERSATIONS_ID',
      MESSAGES_ID: '6478c731211f0492f811',
      LISTENERS_ID: 'listeners',
    },
    buckets: {
      listings: '',
      profiles: '',
    },
  },
  LOCAL: {
    API_ENDPOINT: 'https://localhost/v1',
    PROJECT_ID: 'pickyflats-dev',
    DATABASE_ID: 'pickyflats_web',
    collections: {
      PROFILES_ID: 'profiles',
      LISTINGS_ID: 'listings',
      COMMENTS_ID: 'comments',
      // chat
      CONVERSATIONS_ID: 'conversations',
      MESSAGES_ID: 'messages',
      LISTENERS_ID: 'listeners',
    },
    buckets: {
      listings: 'listings',
      profiles: 'profiles',
    },
  },
};
