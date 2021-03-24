// All action types will be listed here and can be imported as default by the reducers.
const actions = {
  DEBUG: "DEBUG", // For tests
  SET_EDITOR_VALUE: "SET_EDITOR_VALUE",
};

// Debug testing function to log something to the console
export const debugMsg = (msg) => {
  return {
    type: actions.DEBUG,
    msg
  }
};

// Update the editor state
export const setEditorValue = (value) => {
  return {
    type: actions.SET_EDITOR_VALUE,
    value
  }
};

// Defaults to actions types
export default actions;