import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import type { Question, Response } from 'src/types';
import Vote from '../vote_component';
import { Container, Divider, makeStyles } from '@material-ui/core';

export interface ResponseProps {
  response: Response;
  i: number;
}

const useStyles = makeStyles({
  responseContainer: {
    margin: '30px 0',
    padding: '0',
  },
  divider: {
    margin: '25px',
  },
});
const ResponseComponent = (props: ResponseProps) => {
  const { response, i } = props;
  const classes = useStyles(props);
  {
    if (response) {
      return (
        <Container maxWidth="xl" className={classes.responseContainer}>
          <AccessTimeIcon /> {new Date(response.createdAt).toUTCString()}
          <p>Author: {response.author.username}</p>
          <p>Answer: {response.resolution}</p>
          <Vote response={response} />
          <Divider variant="middle" className={classes.divider} />
        </Container>
      );
    }
  }
  return null;
};

export default ResponseComponent;
