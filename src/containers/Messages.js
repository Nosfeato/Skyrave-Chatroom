
import { connect } from 'react-redux';

import Messages from 'src/components/Messages';


const mapStateToProps = state => ({
  username: state.settings.username,
  messages: state.messages.message_list,
});


const MessagesContainer = connect(
  mapStateToProps,
  null,
)(Messages);

export default MessagesContainer;
