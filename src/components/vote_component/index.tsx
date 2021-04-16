import React from 'react';
import type { Question, Response } from 'src/types';
import { Button } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
export interface VoteProps {
  response: Response;
}

const Vote = ({ response }: VoteProps) => {
  return (
    <div style={{ display: 'flex', margin: '5px' }}>
      <Button
        variant="outlined"
        endIcon={<ThumbUpAltOutlinedIcon />}
        color="primary"
      >
        {response.upvote}
      </Button>
      <Button
        variant="outlined"
        endIcon={<ThumbDownAltOutlinedIcon />}
        color="secondary"
      >
        {response.downvote}
      </Button>
    </div>
  );
};

export default Vote;
