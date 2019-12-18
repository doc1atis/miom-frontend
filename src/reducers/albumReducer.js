const INITIAL_STATE = { albums: {} };
const albumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_ALBUM":
      return { ...state, albums: action.payload };
    default:
      return state;
  }
};
export default albumReducer;
