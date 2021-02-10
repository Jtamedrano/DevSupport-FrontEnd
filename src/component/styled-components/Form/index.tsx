import React from 'react';
import styled from 'styled-components';

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Form: React.FC<FormProps> = ({ ...props }) => {
  return <StyledForm {...props}></StyledForm>;
};

export default Form;
