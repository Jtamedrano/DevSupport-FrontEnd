import React from 'react';

//style
import styled, { css } from 'styled-components';

type Color = 'alert' | 'success';
type Variant = 'outlined' | 'filled' | 'text';

interface StatusIndicatorProps {
  color?: Color;
  variant?: Variant;
}

const StatusIndicatorStyle = styled.span<StatusIndicatorProps>`
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  padding: 0.5em 1em;
  border-radius: 0.75em;
  font-weight: 500;

  ${(props) => {
    const { color, variant } = props;
    if (color) {
      switch (color) {
        case 'alert':
          if (variant === 'text') {
            return css`
              color: red;
            `;
          }
          if (variant === 'outlined') {
            return css`
              color: red;
              border-color: red;
            `;
          }
          return css`
            border-color: red;
            color: white;
            background-color: red;
          `;
        case 'success':
          if (variant === 'text') {
            return css`
              color: green;
            `;
          }
          if (variant === 'outlined') {
            return css`
              color: green;
              border-color: green;
            `;
          }
          return css`
            border-color: green;
            color: white;
            background-color: green;
          `;
        default:
          if (variant === 'text') {
            return css`
              color: #000000;
            `;
          }
          if (variant === 'outlined') {
            return css`
              color: #000000;
              border-color: #000000;
            `;
          }
          return css`
            border-color: #000000;
            color: white;
            background-color: #000000;
          `;
      }
    } else {
      return null;
    }
  }}
`;

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  children,
  variant = 'text',
  ...props
}) => {
  return (
    <StatusIndicatorStyle variant={variant} {...props}>
      {children}
    </StatusIndicatorStyle>
  );
};

export default StatusIndicator;
