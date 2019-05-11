
import { connect } from 'react-redux';

// import
import Form from 'src/components/Form';

import { sendMessage, changeMessage } from 'src/store/reducers/form';

// === State / données ===
const mapStateToProps = state => ({
  messageValue: state.form.message,
});

// === Dispatch / actions ===
const mapDispatchToProps = dispatch => ({
  changeMessage: (value) => {
    dispatch(changeMessage(value));
  },

  sendMessage: () => {
    dispatch(sendMessage());
  },
});

// Container
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// Export
export default FormContainer;
