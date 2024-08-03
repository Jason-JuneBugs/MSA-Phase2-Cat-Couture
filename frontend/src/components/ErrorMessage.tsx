 

 


import React from 'react';
import { styled } from '@mui/system';

const StyledErrorMessage = styled('div')({
  padding: '0.5rem',
  color: '#ffffff',
  backgroundColor: '#a60e0e',
});

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <StyledErrorMessage>Error: {message}</StyledErrorMessage>;
};

export default ErrorMessage;

