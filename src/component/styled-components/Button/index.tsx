import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const ButtonStyles = styled.button<ButtonProps>`
  padding: 0.5em 1em;
  border-radius: 1em;
  border: 2px solid #555;

  :active,
  :hover,
  :focus {
    outline: none;
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyles {...props}>{children}</ButtonStyles>;
};

export default Button;
