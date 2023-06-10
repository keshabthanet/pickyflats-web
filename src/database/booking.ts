import { ID } from 'appwrite';

import { DATABASE_ID, databases, RESERVATIONS_ID } from '@/lib/client';

export const createListingReservation = async (data) => {
  const newReservation = await databases.createDocument(
    DATABASE_ID,
    RESERVATIONS_ID,
    ID.unique(),
    data
  );
  return newReservation.$id;
};
