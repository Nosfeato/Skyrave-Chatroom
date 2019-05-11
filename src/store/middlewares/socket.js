    
// Import : src
import { SEND_MESSAGE } from 'src/store/reducers/form';
import { messageReceived } from 'src/store/reducers/messages';

// === Types ===
const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

// === Code ===
let socket;

// === Middleware ===
const socketMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      console.log(window);
      socket = window.io();
      socket.on('send_message', (message) => {
        store.dispatch(messageReceived(message));
      });
      break;

    case SEND_MESSAGE: {
      const state = store.getState();

      const newMessage = {
        user: state.settings.username,
        message: state.form.message.trim(),
      };

      socket.emit('send_message', newMessage);
      break;
    }

    default:
      break;
  }

  next(action);
};

// === Action creator ===
export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

// Export
export default socketMiddleware;
