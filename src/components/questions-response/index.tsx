import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
import type { Question } from 'src/types';

export interface QuestionResponseProps {
  q: Question;
}

const QuestionResponse: React.FC = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField id="response" label="response" />
        <Button type="submit" color="primary">
          Submit Response
        </Button>
      </form>
    </>
  );
};

export default QuestionResponse;
