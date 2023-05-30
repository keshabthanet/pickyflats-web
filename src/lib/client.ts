import { Account, Client } from 'appwrite';

export const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('pickyflats'); // Your project ID

export const account = new Account(client);
