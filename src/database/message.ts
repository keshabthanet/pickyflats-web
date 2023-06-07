import { DATABASE_ID, databases, MESSAGES_ID } from '@/lib/client';

export const deleteMessageById = async (id) => {
  // todo delete attachments also if exits
  await databases.deleteDocument(DATABASE_ID, MESSAGES_ID, id);
};
