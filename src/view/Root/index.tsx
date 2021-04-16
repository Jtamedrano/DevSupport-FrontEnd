import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Accordion,
} from '@material-ui/core';
import React from 'react';

interface ViewProps {}

const questions = [
  {
    question: 'What is 1 + 1?',
    resolved: true,
    resolution: '2',
    author: { username: 'Bob Smith' },
    group: { groupName: 'Front End' },
  },
  {
    question: 'What is the meaning of life?',
    resolved: false,
    resolution: '',
    author: { username: 'Angela Johnson' },
    group: { groupName: 'Back End' },
  },
];

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
  },
}));

const RootView: React.FC = (props: ViewProps) => {
  const classes = useStyles();
  return (
    <>
      <h1>{`De<_Support`}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField id="title" label="Title" />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
      <div className={classes.rootPaper}>
        <h2>Question List</h2>
        {questions.map((q, i) => {
          return (
            <Paper key={i}>
              <p>Author: {q.author.username}</p>
              <p>Title: {q.question}</p>
              <p>Resolved: {q.resolved + ''}</p>
              {q.resolved ? (
                <>
                  <p>Response: {q.resolution}</p>
                  <Button variant="contained">Rate Response Up</Button>
                  <Button variant="contained">Rate Response Down</Button>
                </>
              ) : (
                <>
                  <Button variant="contained">Request Answer</Button>
                </>
              )}
            </Paper>
          );
        })}
      </div>
    </>
  );
};

export default RootView;
