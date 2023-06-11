import { ID, Query } from 'appwrite';

import { DATABASE_ID, databases, LISTINGCOSTS_ID } from '@/lib/client';

import { LISTINGS_ID } from '../lib/client';

export const fetchListingById = async (listingId) => {
  const _listing = await databases.getDocument(
    DATABASE_ID,
    LISTINGS_ID,
    listingId
  );
  // fetch cost data
  const _listingCosts = await databases.listDocuments(
    DATABASE_ID,
    LISTINGCOSTS_ID,
    [Query.equal('listingID', listingId)]
  );

  const _costs = _listingCosts.documents[0];

  return { ..._listing, costs: _costs };
};

export const createListing = async (data) => {
  const newListing = await databases.createDocument(
    DATABASE_ID,
    LISTINGS_ID,
    ID.unique(),
    data
  );
  return newListing.$id;
};

export const saveListingCost = async (data) => {
  await databases.createDocument(
    DATABASE_ID,
    LISTINGCOSTS_ID,
    ID.unique(),
    data
  );
};
