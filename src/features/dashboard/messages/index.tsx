import { Box, ClickAwayListener, IconButton, Popper } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

import { fetchConversationsForUser } from '@/database/conversation';

import Loader from '@/components/Loader';

import useAuthStore from '@/store/useAuthStore';

import ConversationItem from '@/features/chat/ConversationItem';

export default function MessagesPopover() {
  const { user } = useAuthStore();
  const [loading, setLoading] = React.useState(true);
  const [conversations, setConversations] = React.useState<any>([]);

  const [panelOpen, setPanelOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const toggleOpen = () => setPanelOpen(!panelOpen);
  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target) &&
      event.target !== anchorRef.current
    ) {
      return;
    }

    setPanelOpen(false);
  };

  // fetchConversationsForUser

  React.useEffect(() => {
    const loadConversations = async () => {
      try {
        const _conversations = await fetchConversationsForUser(user?.$id);
        setConversations(_conversations);
      } catch (error) {
        console.log('Failed to load conversation ', error);
      } finally {
        setLoading(false);
      }
    };
    loadConversations();
  }, []);

  return (
    <div className='relative'>
      <IconButton ref={anchorRef} onClick={toggleOpen}>
        <FiMessageCircle />
      </IconButton>

      <ClickAwayListener onClickAway={handleClose}>
        <Popper
          anchorEl={anchorRef.current}
          open={panelOpen}
          className='z-[402] rounded bg-white'
        >
          <Box
            boxShadow={3}
            className='flex h-[400px] w-[350px] flex-col overflow-hidden py-2'
          >
            <div className='text-text-secondary-default px-2 text-xl font-medium'>
              Messages
            </div>
            <div className='flex-1 pt-2'>
              {loading && <Loader />}
              <ul className='divide-y divide-gray-300'>
                {loading && <Loader />}
                {conversations.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className='hover:bg-slate-100'
                      onClick={() => setPanelOpen(false)}
                    >
                      <Link href={`/messages/${item.$id}`}>
                        <ConversationItem item={item} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link
              href='/messages'
              className='text-primary-main hover:text-primary-lightExtra px-2 text-center hover:underline'
            >
              See all
            </Link>
          </Box>
        </Popper>
      </ClickAwayListener>
    </div>
  );
}
