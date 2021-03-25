import actions from "./actions"

// State initial values
const editorState = {
  showHtml: 
  `# I'm a header 1
## I'm a subheader 2
[Hi, I'm a link]()
There is \`inline code\` right here!

    if (fourSpaces) {
      return blockOfCode
    }

- item 1
- item 2
- item 3

A quote:
> My quote!

![An image would be here!]()
**I'm bold** and _I'm italic_`
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