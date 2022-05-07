import "./notes.css";
import Masonry from "react-masonry-css";

function Note(props) {
  return (
    <div className="note--box">
      <div className="">
        <span className="note--title">{props.note.title}</span>
        <p className="note--content">{props.note.note}</p>
      </div>
      <div className="note--buttons">
        <i
          className="small material-icons tooltipped"
          data-position="top"
          data-tooltip="Copy To Clipboard"
          onClick={() => navigator.clipboard.writeText(props.note.note)}
        >
          file_copy
        </i>
        <i
          onClick={() => props.del(props.note.id)}
          className="small material-icons tooltipped"
          data-position="top"
          data-tooltip="Delete"
        >
          delete
        </i>
      </div>
    </div>
  );
}

function Notes(props) {
  return (
    <div className="notes--grid" id="grid">
      <Masonry
        breakpointCols={{ default: 4, 800: 2 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.notes
          .filter((note) => {
            if (props.query == "") {
              return note;
            } else if (
              props.query != "" &&
              note.title.toLowerCase().includes(props.query.toLowerCase())
            ) {
              return note;
            }
          })
          .map((note) => (
            <Note key={note.id} note={note} del={props.del} />
          ))}
      </Masonry>
    </div>
  );
}

export default Notes;
