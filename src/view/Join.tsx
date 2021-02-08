import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  LinearProgress,
  TextField,
} from '@material-ui/core';
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import * as yup from 'yup';
import styles from 'styled-components';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

interface Props {}

const signUpSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  confirmedPassword: yup.string().required().min(6),
  agreement: yup.boolean().required(),
});

type SignUpProps = yup.InferType<typeof signUpSchema>;

const Form = styles.form`
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 0 3px #88888888;


  #agreementCheckControl {
    align-self: flex-start;
    label {
      margin: 0;
    }
  }
  #submitBtn-signup {
    align-self: center;
  }
`;

const Join = (props: Props) => {
  const [signUp, setSignUp] = useState<SignUpProps>({
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
    agreement: false,
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCompletion, setPasswordCompletion] = useState({
    percentage: 0,
    errorMessage: '',
  });
  const history = useHistory();

  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'agreement') {
      setSignUp({ ...signUp, agreement: !signUp.agreement });
      return null;
    }
    setSignUp({ ...signUp, [name]: value });
  };

  const passwordVerification = () => {
    const { password, confirmedPassword } = signUp;
    let pointsEarned = 0;
    let msg = '';
    if (password.length >= 6 && confirmedPassword.length >= 6) {
      pointsEarned += 20;
      if (password === confirmedPassword) {
        pointsEarned += 50;
        msg = '';
      } else {
        msg = "Password's do not match";
      }
      [password, confirmedPassword].forEach((pass: string) => {
        if (regexStringTest(/[A-Z]/i, pass)) {
          pointsEarned += 5;
        }
        if (regexStringTest(/[a-z]/i, pass)) {
          pointsEarned += 5;
        }
        if (regexStringTest(/^[0-9!@#$%^&*)(+=._-]+$/g, pass)) {
          pointsEarned += 5;
        }
        if (pass.length >= 8) {
          pointsEarned += 5;
        }
      });
    } else {
      pointsEarned = 0;
      msg =
        'Password must be at least 6 characters long; have 1 uppercase character, 1 lowercase character, and 1 number';
    }

    setPasswordCompletion({
      ...passwordCompletion,
      percentage: pointsEarned,
      errorMessage: msg,
    });
  };

  const regexStringTest = (regex: RegExp, str: string) => {
    return regex.test(str);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    setFormIsValid(signUpSchema.isValidSync(signUp));
    passwordVerification();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUp]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formIsValid && passwordCompletion.percentage >= 90) {
      console.log(signUp);
      history.push('/');
    }
  };

  return (
    <Box m={1}>
      <Form id="signUpForm" onSubmit={handleSubmit}>
        <FormControl id="usernameInputControl" margin="normal">
          <TextField
            label="User Name"
            id="usernameInput"
            value={signUp.username}
            name="username"
            onChange={setInputValue}
            required
            variant="standard"
            InputProps={{
              autoComplete: 'given-name',
            }}
          />
        </FormControl>
        <FormControl id="emailInputControl" margin="normal">
          <TextField
            label="Email Address"
            id="emailInput"
            value={signUp.email}
            name="email"
            onChange={setInputValue}
            required
            variant="standard"
            InputProps={{
              autoComplete: 'username',
            }}
          />
        </FormControl>
        <FormControl id="passwordInputControl" margin="normal">
          <TextField
            label="Password"
            id="passwordInput"
            type={showPassword ? 'text' : 'password'}
            value={signUp.password}
            name="password"
            onChange={setInputValue}
            required
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              autoComplete: 'new-password',
            }}
            helperText={passwordCompletion.errorMessage}
            error={
              signUp.password.length >= 6 &&
              passwordCompletion.errorMessage !== ''
            }
          />
        </FormControl>
        <FormControl id="confirmationPasswordInput" margin="normal">
          <TextField
            label="Confirm Password"
            id="confirmationPasswordInput"
            type={showPassword ? 'text' : 'password'}
            value={signUp.confirmedPassword}
            name="confirmedPassword"
            onChange={setInputValue}
            required
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              autoComplete: 'new-password',
            }}
            helperText={
              signUp.confirmedPassword.length >= 6
                ? passwordCompletion.errorMessage
                : ''
            }
            error={
              signUp.confirmedPassword.length >= 6 &&
              passwordCompletion.errorMessage !== ''
            }
          />
        </FormControl>

        <LinearProgress
          variant="determinate"
          value={passwordCompletion.percentage}
          color={passwordCompletion.percentage >= 90 ? 'primary' : 'secondary'}
        />
        <FormControl id="agreementCheckControl">
          <FormControlLabel
            value={true}
            control={
              <Checkbox
                color="primary"
                checked={signUp.agreement}
                name="agreement"
                onChange={setInputValue}
                required
              />
            }
            label="I agree with the terms and conditions of DevSupport and Affiliate Programs using DevSupport"
            labelPlacement="start"
            id="agreementCheck"
          />
        </FormControl>
        <Button
          type="submit"
          id="submitBtn-signup"
          color="primary"
          variant="contained"
        >
          Sign Up
        </Button>
      </Form>
    </Box>
  );
};

export default Join;
