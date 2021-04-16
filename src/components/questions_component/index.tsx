import React from 'react';
import { Button, IconButton, Paper, Chip, Badge } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import QuestionResponse from '../questions-response';
import ResponseComponent from '../response_component';
import type { Question } from 'src/types';

export interface QuestionsComponentProps {
  q: Question;
  i: number;
}

const QuestionsComponent = (props: QuestionsComponentProps) => {
  const { q, i } = props;
  console.log(q);
  return (
    <>
      <Paper key={i}>
        <Chip
          label={q.resolved ? 'Resolved' : 'Pending'}
          color={q.resolved ? 'primary' : 'secondary'}
        />
        <div style={{ flexDirection: 'row' }}>
          <p>
            <AccessTimeIcon /> {new Date(q.createdAt).toUTCString()}
          </p>
        </div>
        <h6> {q.question}</h6>
        <p>Author: {q.author.username}</p>

        {q.resolved ? (
          <>
            <p>Answer:</p>
            <p> {q.resolution}</p>

            {q.responses &&
              q.responses.map((response, i) => (
                <ResponseComponent response={response} i={i} />
              ))}
          </>
        ) : (
          <>
            <Button color="primary">Request Answer</Button>
          </>
        )}
        <QuestionResponse />
      </Paper>
    </>
  );
};

export default QuestionsComponent;
