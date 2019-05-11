
const initialState = {
  username: 'Potato Power',
};


const CHANGE_USERNAME = 'CHANGE_USERNAME';


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.value,
      };
    default:
      return state;
  }
};


export const changeUsername = value => ({
  type: CHANGE_USERNAME,
  value,
});
