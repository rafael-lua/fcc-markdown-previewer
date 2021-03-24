import { connect } from "react-redux"; // Component will be exported through the connect
import { debugMsg, setEditorValue } from '../store/actions';

const Editor = (props) => {

  // props.debugMsg("Editor message!");

  return (
    <div className="container">
      <div className="editor-area">
        <textarea 
          name="editor" 
          id="editor" 
          cols="30" 
          rows="15" 
          placeholder="Type some markdown..."
          defaultValue="I'm the editor"
          onChange={(e) => props.setEditorValue(e.target.value)}
        >
        </textarea>
      </div>
    </div>
  )
}

// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = {
  debugMsg,
  setEditorValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
