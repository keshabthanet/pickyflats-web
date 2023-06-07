import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

import { keyArrayFromArray, objFromArray } from '@/lib/object';

type IDSeparatedData = {
  byId: { [key: string]: any };
  allIds: string[];
};

interface ChatStore {
  firstLoad: boolean;
  // activeChatUser: any;
  conversations: IDSeparatedData;
  setConversations: (conversations: any[]) => void;
  setFirstLoad: (load: boolean) => void; // helper for tracking loader in message page

  // single chat
  messages: IDSeparatedData;
  setMessages: (messages: any[]) => void;
}

const useChatStoreBase = create<ChatStore>((set) => ({
  firstLoad: false,
  conversations: { byId: {}, allIds: [] },
  messages: { byId: {}, allIds: [] },
  setConversations: (conversations) => {
    const byId = objFromArray(conversations);
    const allIds = keyArrayFromArray(conversations);
    set(() => ({ conversations: { byId, allIds } }));
  },
  setMessages: (messages) => {
    const byId = objFromArray(messages);
    const allIds = keyArrayFromArray(messages);
    set(() => ({ messages: { byId, allIds } }));
  },
  setFirstLoad: (load) => set(() => ({ firstLoad: load })),
}));

const useChatStore = createSelectorHooks(useChatStoreBase);

export default useChatStore;
