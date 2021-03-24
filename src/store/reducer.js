import actions from "./actions"

// State has only a initial value, that will be updated once the quotes are asynchronously loaded
const appStates = {
  
};

const reducer = (state = appStates, action) => {
  switch(action.type) {

    case actions.DEBUG:
      console.log("ACTION SENT. MESSAGE: " + action.msg);
      return state;

    default:
      return state;
  }
};

export default reducer;