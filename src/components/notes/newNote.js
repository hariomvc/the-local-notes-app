import { useState } from "react";
import "./newNote.css";

function NewNote(props) {
  const [typing, setTyping] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [textareaStyle, setTextareaStyle] = useState({ textalign: "justify" });

  function addNote() {
    props.add(title, content);
    setTitle("");
    setContent("");
  }

  function textareaHeight(e) {
    setTextareaStyle({
      height: e.target.scrollHeight + "px",
      textAlign: "justify",
      maxHeight: "20vh",
    });
  }

  return (
    <div className="NewNote__Container">
      {typing ? (
          <input
            id="title"
            type="note"
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            placeholder="Title"
            className="NewNote__input--title"
          />
      ) : null}
      <textarea
        value={content}
        onClick={(e)=>{setContent(e.target.value); setTyping(true);}}
        onChange={(e)=>{setContent(e.target.value); setTyping(true);}}
        style={textareaStyle}
        onInput={textareaHeight}
        placeholder="Take a Note..."
        id="textarea1"
        className="NewNote__input--content"
      ></textarea>
      {typing ? (
        <a
          onClick={() => {addNote(); setTyping(false)}}
          className="NewNote__add"
        >
          <i className="material-icons">add</i>
        </a>
      ) : null}
    </div>
  );
}

export default NewNote;
