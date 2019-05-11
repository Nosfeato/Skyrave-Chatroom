import React from 'react';

import Settings from 'src/containers/Settings';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';

import 'src/styles/index.scss';
import './app.scss';

const App = () => (
  <>
    <h1 id="header">
      <span id="chatroom">Chatroom</span>
      <Settings />
    </h1>
    <Messages />
    <Form />
  </>
);

export default App;
