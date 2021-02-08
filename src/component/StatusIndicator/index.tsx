import React from 'react';

interface StatusIndicatorProps {}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default StatusIndicator;
