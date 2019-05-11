
// === Initial State ===
const initialState = {
  message: '',
};

// === Types ===
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// === Reducer ===
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        message: action.value,
      };

    case SEND_MESSAGE: {
      return {
        ...state,
        message: '',
      };
    }

    default:
      return state;
  }
};

// === Action creators ===
export const changeMessage = value => ({
  type: CHANGE_MESSAGE,
  value,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
