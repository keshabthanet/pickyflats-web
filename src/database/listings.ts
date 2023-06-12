import { ID, Query } from 'appwrite';

import { DATABASE_ID, databases, LISTINGCOSTS_ID } from '@/lib/client';

import { LISTINGS_ID } from '../lib/client';

import { Listing } from '@/types/listing';

//! TODO: fetch by recent & flat type
export const fetchListings = async () => {
  const _listings = await databases.listDocuments(DATABASE_ID, LISTINGS_ID, [
    // Query.equal('userID', [userID]),
    // Query.search('userID', userID), // ! try on production
  ]);

  const listingsIds = [
    ...new Set(_listings.documents.flatMap((res) => res.$id)),
  ];

  // fetch all listing costs
  const _listingsCosts = await databases.listDocuments(
    DATABASE_ID,
    LISTINGCOSTS_ID,
    [Query.equal('listingID', listingsIds)]
  );

  const listingsWithCosts = _listings.documents.map((listing) => {
    const listingCosts = _listingsCosts.documents.find(
      (item) => item.listingID === listing.$id
    );
    return { ...listing, costs: listingCosts };
  });

  return listingsWithCosts as Listing[];
};

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

export const fetchListingsByUserId = async (userID) => {
  const _listings = await databases.listDocuments(DATABASE_ID, LISTINGS_ID, [
    Query.equal('userID', userID),
    // Query.equal('userID', [userID]),
    // Query.search('userID', userID), // ! try on production
  ]);

  const listingsIds = [
    ...new Set(_listings.documents.flatMap((res) => res.$id)),
  ];

  // fetch all listing costs
  const _listingsCosts = await databases.listDocuments(
    DATABASE_ID,
    LISTINGCOSTS_ID,
    [Query.equal('listingID', listingsIds)]
  );

  const listingsWithCosts = _listings.documents.map((listing) => {
    const listingCosts = _listingsCosts.documents.find(
      (item) => item.listingID === listing.$id
    );
    return { ...listing, costs: listingCosts };
  });

  return listingsWithCosts as Listing[];
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
