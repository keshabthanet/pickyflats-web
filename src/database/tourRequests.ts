import { ID } from 'appwrite';

import { DATABASE_ID, databases, TOURREQUESTS_ID } from '@/lib/client';

interface TourInput {
  userID: string;
  listingID: string;
  requestedDateTime: string;
  note: string;
}

export const createRequestForTour = async (input: TourInput) => {
  const tourRequest = await databases.createDocument(
    DATABASE_ID,
    TOURREQUESTS_ID,
    ID.unique(),
    input
  );
  return tourRequest.$id;
};
