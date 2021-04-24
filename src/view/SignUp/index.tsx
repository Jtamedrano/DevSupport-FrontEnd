import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { InputGroup } from '../../components/InputGroup';
import './style.scss';

interface SignUpProps {}

const useStyles = makeStyles((theme: Theme) => ({
  signUpWrapper: {
    padding: theme.spacing(2),
    width: '50%',
  },
  headerText: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  inputWrapper: {
    marginBottom: theme.spacing(2),
    width: '75%',
  },
  buttonWrapper: {
    marginBottom: theme.spacing(2),
  },
}));

const Component: React.FC<SignUpProps> = ({}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.signUpWrapper}>
      <Typography variant={'h2'} className={classes.headerText}>
        Sign Up
      </Typography>
      <Formik
        initialValues={{ username: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form id="signup-form">
            <Box className={classes.inputWrapper}>
              <InputGroup
                name="username"
                placeholder="username"
                label="Username"
              />
            </Box>
            <Box className={classes.inputWrapper}>
              <InputGroup
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Box className={classes.inputWrapper}>
              <InputGroup
                name="confirmPassword"
                placeholder="confirm password"
                label="Confirm Password"
                type="password"
              />
            </Box>
            <Box className={classes.buttonWrapper}>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="outlined"
                color="primary"
              >
                {isSubmitting ? <CircularProgress size={24} /> : 'Sign Up'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default Component;
