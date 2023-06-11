import { ID, Query } from 'appwrite';

import {
  DATABASE_ID,
  databases,
  LISTINGS_ID,
  RESERVATIONS_ID,
} from '@/lib/client';

export const createListingReservation = async (data) => {
  const newReservation = await databases.createDocument(
    DATABASE_ID,
    RESERVATIONS_ID,
    ID.unique(),
    data
  );
  return newReservation.$id;
};

export const getReservedListingsForUser = async (userID) => {
  const reservations = await databases.listDocuments(
    DATABASE_ID,
    RESERVATIONS_ID,
    [Query.equal('user', userID)]
  );

  const litingsIds = [
    ...new Set(reservations.documents.flatMap((res) => res.listingID)),
  ];

  // find all the reserved listings
  const listings = await databases.listDocuments(DATABASE_ID, LISTINGS_ID, [
    Query.equal('$id', litingsIds),
  ]);

  const reservationsWithListings = reservations.documents.map(
    (reservedListing) => {
      const listing = listings.documents.find(
        (item) => item.$id === reservedListing.listingID
      );
      return { ...reservedListing, listing };
    }
  );

  return reservationsWithListings;
};
