import { connect } from "react-redux"; // Component will be exported through the connect
import { useEffect } from "react";
const marked = require("marked");
marked.setOptions({
  breaks: true
});

const Previewer = (props) => {

  // Update the preview html everytime the state of the editor changes through useEffect.
  useEffect(() => {
    const preview = document.getElementById("preview");
    preview.innerHTML = marked(props.showHtml);

  }, [props.showHtml]); // Only re-run the effect if these variables changes. Empty array will make so it runs only once.

  return (
    <div className="container">
      <div className="previewer-area">
          <p id="preview">
            
          </p>
      </div>      
    </div>
  )
}

// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(Previewer);
