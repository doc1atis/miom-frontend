const clearError = () => dispatch => {
  dispatch({ type: "CLEAR_ERROR", payload: "" });
};

export default clearError;
