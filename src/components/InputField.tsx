import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  groupClass?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  color: _,
  groupClass = 'inputForm',
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <div>
      <FormControl margin="normal" className={groupClass}>
        <FormLabel htmlFor="username">{label}</FormLabel>
        <Input
          {...field}
          {...props}
          value={field.value}
          onChange={field.onChange}
          id={field.name}
          placeholder={props.placeholder}
        />
        {error ? <FormHelperText>{error}</FormHelperText> : null}
      </FormControl>
    </div>
  );
};

export default InputField;
