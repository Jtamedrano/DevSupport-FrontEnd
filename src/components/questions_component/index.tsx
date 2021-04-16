import { Button, Paper, Chip } from '@material-ui/core';
import React from 'react';

export interface QuestionsComponentProps {
  q: {
    question: string;
    resolved: boolean;
    resolution: string;
    author: {
      username: string;
    };
    group: {
      groupName: string;
    };
  };
  i: number;
}

const QuestionsComponent = (props: QuestionsComponentProps) => {
  const { q, i } = props;
  return (
    <>
      <Paper key={i}>
        <Chip
          label={q.resolved ? 'Resolved' : 'Pending'}
          color={q.resolved ? 'primary' : 'secondary'}
        />
        <h6> {q.question}</h6>
        <p>Author: {q.author.username}</p>

        {q.resolved ? (
          <>
            <p>Answer:</p>
            <p> {q.resolution}</p>
            <Button variant="contained">Rate Response Up</Button>
            <Button variant="contained">Rate Response Down</Button>
          </>
        ) : (
          <>
            <Button variant="contained">Request Answer</Button>
          </>
        )}
      </Paper>
    </>
  );
};

export default QuestionsComponent;
