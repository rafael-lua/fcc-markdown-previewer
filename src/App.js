import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">MARKDOWN PREVIEWER</h1>
        <Editor />
        <Previewer />
      </header>
    </div>
  );
}

export default App;
