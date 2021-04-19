import React from 'react';

import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Accordion,
} from '@material-ui/core';

import QuestionComponent from '../../components/questions_component';
//TESTING DATA
import questions from '../../data';
import type { Question, Response } from 'src/types';
//TESTING DATA

export interface QuestionsWrapperProps {
  q: Question;
  r: Response;
}

const useStyles = makeStyles((theme) => ({
  rootPaper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '& > div': {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1),
      minHeight: theme.spacing(16),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  },
}));
const QuestionsWrapper: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.rootPaper}>
        <h2>Question List</h2>
        {questions.map((q, i) => {
          return <QuestionComponent q={q} i={i} />;
        })}
      </div>
    </>
  );
};

export default QuestionsWrapper;
