import React from "react";

function CreateArea() {
    const [noteTitle, setNoteTitle] = React.useState("");
    const [noteContent, setNoteContent] = React.useState("");
    const [notes, setNotes] = React.useState([]);
    const [id, setId] = React.useState(0);

    function handleNoteTitleChange(event) {
        setNoteTitle(event.target.value);
    }

    function handleNoteContentChange(event) {
        setNoteContent(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newNote = {
            id: id,
            title: noteTitle,
            content: noteContent,
        };
        setNotes([...notes, newNote]);
        setId(id + 1);
        setNoteTitle("");
        setNoteContent("");
    }


  return (
    <div>
      <form>
        <input onChange={handleNoteTitleChange} name="title" placeholder="Title" />
        <textarea onChange={handleNoteContentChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleSubmit} name="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
