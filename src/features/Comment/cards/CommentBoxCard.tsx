import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import { postComment } from '@/database/comment';

import useAuthStore from '@/store/useAuthStore';
import useListingStore from '@/store/useListingStore';
import useSnackbarStore from '@/store/useSnackbarStore';

const CommentBoxCard: React.FC = ({ listingID }: { listingID?: string }) => {
  const { user } = useAuthStore();
  const [comment, setComment] = useState('');
  const { openSnackbar } = useSnackbarStore();
  const { refresh } = useListingStore();
  const [loading, setLoading] = useState(false);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user) {
      openSnackbar('You must be logged in to post a comment.', 'info', {
        horizontal: 'center',
        vertical: 'top',
      });
      return;
    }

    setLoading(true);
    try {
      await postComment({ listingID, userID: user?.$id, comment });
      setComment('');
      refresh();
    } catch (e) {
      openSnackbar('Failed to post comment, Please try again!', 'error', {
        horizontal: 'center',
        vertical: 'top',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant='outlined'
          placeholder='Write a comment...'
          value={comment}
          onChange={handleCommentChange}
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          style={{ marginTop: '1rem' }}
          disabled={loading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CommentBoxCard;
