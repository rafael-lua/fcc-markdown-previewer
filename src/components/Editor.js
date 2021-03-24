const Editor = (props) => {
  return (
    <div className="container">
      <div className="editor-area">
        <textarea name="editor" id="editor" cols="30" rows="15" placeholder="Type some markdown...">
          I'm the editor
        </textarea>
      </div>
    </div>
  )
}

export default Editor
