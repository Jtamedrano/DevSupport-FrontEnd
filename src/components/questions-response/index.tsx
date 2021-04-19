import * as React from 'react';
import {
  Button,
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Typography,
} from '@material-ui/core';
import type { Question } from 'src/types';

export interface QuestionResponseProps {
  q: Question;
}

const QuestionResponse: React.FC = () => {
  return (
    <>
      <Typography variant="h6" component="h6">
        Please enter your response:
      </Typography>
      <FormControl
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField id="response" label="Response" />
        <Button type="submit" color="primary">
          Submit Response
        </Button>
      </FormControl>
    </>
  );
};

export default QuestionResponse;
