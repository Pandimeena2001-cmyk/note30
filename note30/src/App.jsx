import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [noteContent, setNoteContent] = useState("");

  // Load saved content when app starts
  useEffect(() => {
    const savedNote = localStorage.getItem("editorContent");
    if (savedNote) {
      setNoteContent(savedNote);
    }
  }, []);

  // Save content whenever note changes
  useEffect(() => {
    localStorage.setItem("editorContent", noteContent);
  }, [noteContent]);

  // Clear note
  const clearNote = () => {
    setNoteContent("");
  };

  return (
    <div className="app">
      <h1>📝 Note Editor</h1>

      <textarea
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        placeholder="Write your note here..."
      />

      <button onClick={clearNote}>Clear Note</button>
    </div>
  );
}

export default App;