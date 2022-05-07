import { useState , useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import NewNote from "./components/notes/newNote";
import Notes from "./components/notes/notes";
import Footer from "./components/footer/Footer";

function App() {
  const storedNotes = JSON.parse(localStorage.getItem("the-notes"));
  const defaultNotes = [
    {
      id: 0,
      title: "Welcome to The Notes!",
      note: "Click the delete icon below to delete me and start making your own notes ;)",
    },
  ];
  const [notes, setNotes] = useState(storedNotes ? storedNotes : defaultNotes);

  
  const [query, setQuery] = useState('');

  function search(searchquery){
    setQuery(searchquery);
  }

  function saveNotes(){
    localStorage.setItem('the-notes',JSON.stringify(notes))
  }

  function addNote(title, content) {
    let id = notes.length;
    setNotes([
      ...notes,
      {
        id: id,
        title: title,
        note: content,
      },
    ]);
    saveNotes();
  }

  function deleteNote(id) {
    let Notes = notes.filter((note) => note.id !== id);
    setNotes(Notes);
    saveNotes();
  }

  // useEffect(() => {
  //   console.log('Query:', query);
  // }, [query]);

  return (
    <div className="">
      <Header query={query} setQuery={setQuery} search={search}/>
      <NewNote add={addNote}/>
      <Notes notes={notes} del={deleteNote} query={query}/>
      <Footer/>
    </div>
  );
}

export default App;
