import React from 'react';

import './ErrorMessage.css';


const ErrorMessage = props =>
  <span className="ErrorMessage" onClick={props.onClick}>{props.message}</span>

export default ErrorMessage;