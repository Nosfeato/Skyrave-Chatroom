
import { connect } from 'react-redux';

// import
import Settings from 'src/components/Settings';

import { changeUsername } from 'src/store/reducers/settings';

// === State / données ===
const mapStateToProps = state => ({
  username: state.settings.username,
});

// === Dispatch / actions ===
const mapDispatchToProps = dispatch => ({

  onChangeUsername: (value) => {
    dispatch(changeUsername(value));
  },
});

// Container
const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

// Export
export default SettingsContainer;
