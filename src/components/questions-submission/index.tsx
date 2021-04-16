import React from 'react';
import { Button, TextField } from '@material-ui/core';

const QuestionsSubmission: React.FC = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField id="title" label="Title" />
        <Button type="submit" variant="outlined" color="primary">
          Submit Question
        </Button>
      </form>
    </>
  );
};

export default QuestionsSubmission;
