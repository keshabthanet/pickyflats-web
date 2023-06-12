import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const CommentBoxCard: React.FC = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform any necessary actions with the comment, such as saving or submitting it
    console.log('Submitted comment:', comment);
    setComment('');
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
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CommentBoxCard;
