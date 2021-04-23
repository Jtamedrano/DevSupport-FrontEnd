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
import data from '../../data';
import type { Question, Response } from 'src/types';
//TESTING DATA

export interface QuestionsWrapperProps {
  questions: Question[];
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
  const questions: Question[] = data;
  return (
    <>
      <div className={classes.rootPaper}>
        <h2>Question List</h2>
        {questions.map((q, i) => {
          return <QuestionComponent question={q} i={i} />;
        })}
      </div>
    </>
  );
};

export default QuestionsWrapper;
