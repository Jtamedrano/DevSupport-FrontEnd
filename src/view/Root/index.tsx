import React from 'react';
import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Accordion,
} from '@material-ui/core';
//TESTING DATA
import questions from '../../data';
//TESTING DATA
import QuestionComponent from '../../components/questions_component';
import QuestionSubmission from '../../components/questions-submission';

interface ViewProps {}

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

const RootView: React.FC = (props: ViewProps) => {
  const classes = useStyles();
  return (
    <>
      <h1>{`De<_Support`}</h1>
      <QuestionSubmission />
      <div className={classes.rootPaper}>
        <h2>Question List</h2>
        {questions.map((q, i) => {
          return <QuestionComponent q={q} i={i} />;
        })}
      </div>
    </>
  );
};

export default RootView;
