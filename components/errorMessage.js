import React from 'react';

const ErrorMessage = ({ children }) => (
  <div className="font-bold" data-testid="error">
    {children}
  </div>
);

export default ErrorMessage;