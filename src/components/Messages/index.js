import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

class Messages extends React.Component {
  constructor() {
    super();
    this.messageDiv = React.createRef();
  }

  componentDidUpdate() {
    this.messageDiv.scrollTo(0, this.messageDiv.scrollHeight);
    console.log('update');
  }

  render() {
    const { messages, username } = this.props;
    console.log(messages);
    return (
      <div id="message-container" ref={this.messageDiv}>
        <ul>
          {messages.map(message => (
            <Message
              key={message.id}
              {...message}
              username={username}
            />
          ))}
        </ul>
      </div>
    );
  }
}


export default Messages;
