import React from 'react';
import { Button, IconButton, Paper, Chip, Badge } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import QuestionResponse from '../questions-response';

export interface QuestionsComponentProps {
  q: {
    question: string;
    createdAt: number;
    resolved: boolean;
    resolution: string;
    upvote: string;
    downvote: string;
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

            <div style={{ display: 'flex', margin: '5px' }}>
              <p>Upvotes: {q.upvote}</p>
              <Button
                variant="outlined"
                startIcon={<ThumbUpAltOutlinedIcon />}
                color="primary"
              >
                Upvote
              </Button>
              <p>Downvotes: {q.downvote}</p>
              <Button
                variant="outlined"
                startIcon={<ThumbDownAltOutlinedIcon />}
                color="secondary"
              >
                Downvote
              </Button>
            </div>
            <QuestionResponse />
          </>
        ) : (
          <>
            <Button variant="outlined" color="primary">
              Request Answer
            </Button>
          </>
        )}
      </Paper>
    </>
  );
};

export default QuestionsComponent;
