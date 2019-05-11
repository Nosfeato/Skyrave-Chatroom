import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, username }) => {
  return (
    <li>
      <h1>{message.text}</h1>
      <p>{username}</p>
    </li>
  );
};

export default Message;
