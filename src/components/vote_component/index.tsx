import React from 'react';
import type { Question, Response } from 'src/types';
import { Button, Container, makeStyles } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
export interface VoteProps {
  response: Response;
}
const useStyles = makeStyles({
  container: {
    width: '20%',
    display: 'flex',
    margin: '5px',
    justifyContent: 'space-evenly',
  },
});
const Vote = (props: VoteProps) => {
  const { response } = props;
  const classes = useStyles(props);
  return (
    <Container maxWidth="sm" className={classes.container}>
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
    </Container>
  );
};

export default Vote;
