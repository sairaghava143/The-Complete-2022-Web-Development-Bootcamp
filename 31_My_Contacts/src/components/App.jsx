import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState({
    noteTitle: ["Note title"],
    noteContent: ["Note content"],
  });

  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title={notes.noteTitle} content={notes.noteContent} />
      <Footer />
    </div>
  );
}

export default App;
