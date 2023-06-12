import { Query } from 'appwrite';

import {
  DATABASE_ID,
  databases,
  LISTINGCOSTS_ID,
  LISTINGS_ID,
} from '@/lib/client';

import { Listing } from '@/types/listing';

export const fetchListingById = async (listingID) => {
  const _listing = await databases.getDocument(
    DATABASE_ID,
    LISTINGS_ID,
    listingID
  );

  // fetch all listing costs
  const _listingCosts = await databases.listDocuments(
    DATABASE_ID,
    LISTINGCOSTS_ID,
    [Query.equal('listingID', _listing.$id)]
  );

  return { ..._listing, costs: _listingCosts.documents[0] } as Listing;
};
