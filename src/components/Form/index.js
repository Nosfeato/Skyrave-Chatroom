import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

class Form extends React.Component {

  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.messageInput = React.createRef();
  }


  handleChange = (evt) => {

    const { value } = evt.target;
    const { changeMessage } = this.props;
    changeMessage(value);
  }


  handleSubmit = (evt) => {
    evt.preventDefault();
    let { value } = this.messageInput.current;
    const { sendMessage } = this.props;
    if (value.trim() !== '') {
      sendMessage(value);
    }
    value = '';
  }

  render() {
    const { messageValue } = this.props;

    return (
      <form id="message" onSubmit={this.handleSubmit}>
        <input placeholder="Votre message" ref={this.messageInput} value={messageValue} onChange={this.handleChange} />
      </form>
    );
  }
}

export default Form;
