import React from 'react';
import {
  Button,
  Paper,
  Chip,
  Divider,
  Typography,
  Container,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import QuestionResponse from '../questions-response';
import ResponseComponent from '../response_component';
import type { Question } from 'src/types';

export interface QuestionsComponentProps {
  question: Question;
  i: number;
}
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 3px 5px 2px rgba(46, 49, 49, .5)',
  },
  divider: { margin: '25px' },
  timeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
  },
  time: { display: 'inline', alignSelf: 'flex-end', padding: '0 15px 0 0' },
  chip: {
    padding: '0 25px',
    margin: '0 10px',
  },
  questionContainer: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  responseContainer: { padding: '5px' },
});

const QuestionsComponent = (props: QuestionsComponentProps) => {
  const classes = useStyles(props);
  const { question, i } = props;
  return (
    <>
      <Paper key={i} className={classes.root}>
        <Container maxWidth="xl" className={classes.timeContainer}>
          <Chip
            className={classes.chip}
            label={question.resolved ? 'Resolved' : 'Pending'}
            color={question.resolved ? 'primary' : 'secondary'}
          />
          <Typography variant="body1" component="p" className={classes.time}>
            <AccessTimeIcon /> {new Date(question.createdAt).toUTCString()}
          </Typography>
        </Container>

        <Container maxWidth="xl" className={classes.questionContainer}>
          <Typography variant="h3" component="h3">
            {question.question}
          </Typography>
          <Typography variant="h6" component="h4">
            Author: {question.author.username}
          </Typography>
        </Container>
        {question.resolved ? (
          <>
            <Divider variant="middle" className={classes.divider} />
            <Box className={classes.responseContainer}>
              {question.responses &&
                question.responses.map((response, responseIndex) => (
                  <ResponseComponent
                    response={response}
                    i={responseIndex}
                    key={`question-${i + 1}-response-${responseIndex + 1}`}
                  />
                ))}
            </Box>
          </>
        ) : (
          <>
            <Button color="primary">Request Answer</Button>
          </>
        )}
        <QuestionResponse questionIndex={i} />
      </Paper>
    </>
  );
};

export default QuestionsComponent;
