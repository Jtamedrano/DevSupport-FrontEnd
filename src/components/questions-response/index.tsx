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
  questionIndex: number;
}

const QuestionResponse: React.FC<QuestionResponseProps> = ({
  questionIndex,
}) => {
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
        <TextField
          id={`question-response-form-${questionIndex}`}
          label="Response"
        />
        <Button type="submit" color="primary">
          Submit Response
        </Button>
      </FormControl>
    </>
  );
};

export default QuestionResponse;
