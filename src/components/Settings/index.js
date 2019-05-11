
import React from 'react';
import PropTypes from 'prop-types';

import './settings.scss';

class Settings extends React.Component {

  handleChange = (evt) => {
    const { value } = evt.target;

    const { onChangeUsername } = this.props;

    onChangeUsername(value);
  };

  render() {
    const { username } = this.props;
    console.log(username);

    return (
      <>
        <input onChange={this.handleChange} id="profile" type="text" value={username} placeholder="Enter your username" />
      </>
    );
  }
}

export default Settings;
