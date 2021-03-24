import actions from "./actions"

// State initial values
const editorState = {
  showHtml: ""
};

const reducer = (state = editorState, action) => {
  switch(action.type) {

    case actions.DEBUG:
      console.log("ACTION SENT. MESSAGE: " + action.msg);
      return state;

    case actions.SET_EDITOR_VALUE:
      return Object.assign({}, state, {
        showHtml: action.value
      });

    default:
      return state;
  }
};

export default reducer;