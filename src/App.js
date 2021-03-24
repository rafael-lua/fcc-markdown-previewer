import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { Provider } from "react-redux";
import store from "./store/config";

// store.dispatch({type: "DEBUG", msg: "Working!"});

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header className="header">
          <h1 className="header-title">MARKDOWN PREVIEWER</h1>
        </header>
        <Editor />
        <Previewer />
      </div>
    </Provider>
  );
}

export default App;
