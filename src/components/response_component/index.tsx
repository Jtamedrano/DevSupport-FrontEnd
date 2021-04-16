import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import type { Question, Response } from 'src/types';
import Vote from '../vote_component';

export interface ResponseProps {
  response: Response;
  i: number;
}

const ResponseComponent = ({ response, i }: ResponseProps) => {
  {
    if (response) {
      return (
        <>
          <AccessTimeIcon /> {new Date(response.createdAt).toUTCString()}
          <p>Author: {response.author.username}</p>
          <p>Answer: {response.resolution}</p>
          <Vote response={response} />
        </>
      );
    }
  }
  return null;
};

export default ResponseComponent;
