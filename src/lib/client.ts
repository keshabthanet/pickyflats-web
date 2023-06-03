import { Account, Client, Databases } from 'appwrite';

import { APPWRITE_ENV_MODE, appwriteConfig } from '@/lib/config';

const ENV_MODE: APPWRITE_ENV_MODE = (process.env.NEXT_PUBLIC_APPWRITE_MODE ||
  'CLOUD') as APPWRITE_ENV_MODE;

export const client = new Client()
  .setEndpoint(appwriteConfig[ENV_MODE].API_ENDPOINT!) // APPWRITE API Endpoint
  .setProject(appwriteConfig[ENV_MODE].PROJECT_ID!); // APPWRITE project ID

export const account = new Account(client);

export const databases = new Databases(client);
export const DATABASE_ID =
  appwriteConfig[ENV_MODE].DATABASE_ID || 'pickyflats_web';

//table IDs
export const PROFILES_ID =
  appwriteConfig[ENV_MODE].collections.PROFILES_ID || '6477ecf5129aa58806e1';
export const LISTINGS_ID =
  appwriteConfig[ENV_MODE].collections.LISTINGS_ID || 'listings';

export const APP_URL =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:3000'
    : 'https://pickyflats.vercel.app';
