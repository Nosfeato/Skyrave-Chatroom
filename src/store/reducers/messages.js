
const messageId = 0;

const initialState = {
  id: messageId,
  message_list: [],
};

const SEND_MESSAGE = 'SEND_MESSAGE';
const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
      };

    case MESSAGE_RECEIVED:
      return {
        ...state,
        message_list: [...state.message_list, action.message],
      };

    default:
      return state;
  }
};

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const messageReceived = message => ({
  type: MESSAGE_RECEIVED,
  message,
});
