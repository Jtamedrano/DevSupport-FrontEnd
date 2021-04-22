import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

type InputGroupProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  placeholder?: string;
};

export const InputGroup = (props: InputGroupProps) => {
  const [field, error] = useField(props);
  return (
    <FormControl className="textInputGroup" error={!!error.error}>
      <InputLabel htmlFor={field.name}>{props.label}</InputLabel>
      <Input {...field} id={field.name} placeholder={props.placeholder} />
      {error.error && <FormHelperText>{error.error}</FormHelperText>}
    </FormControl>
  );
};
