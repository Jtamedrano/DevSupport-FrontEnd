import * as React from 'react';
import { Button, TextField } from '@material-ui/core';

export interface QuestionResponseProps {}

const QuestionResponse: React.SFC<QuestionResponseProps> = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField id="response" label="response" />
        <Button type="submit" variant="outlined" color="primary">
          Submit Response
        </Button>
      </form>
    </>
  );
};

export default QuestionResponse;
