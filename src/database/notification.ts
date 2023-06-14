import { ID } from 'appwrite';

import { DATABASE_ID, databases, NOTIFICATIONS_ID } from '@/lib/client';

export const getNotificationByUserID = async (userID) => {
  //
};

export const createListingLikeNotification = async (
  listingID,
  likedBy,
  sellerID
) => {
  await databases.createDocument(DATABASE_ID, NOTIFICATIONS_ID, ID.unique(), {
    type: 'like',
    userID: sellerID, // notification receiver
    likedUserID: likedBy,
    listingId: listingID,
  });
};

export const createListingCommentNotification = async (
  listingID,
  sellerID,
  commentID
) => {
  await databases.createDocument(DATABASE_ID, NOTIFICATIONS_ID, ID.unique(), {
    type: 'commented',
    userID: sellerID, // notification receiver
    listingId: listingID,
    commentId: commentID,
  });
};
