import { useState } from "react";
import "./Notes.css";
function Notes() {
    const [note, setNote] = useState("");
    const[notes,setNotes]=useState([]);
  return (
    <div className="notes">
      <h1>Notes App</h1>
      <input type="text"
       placeholder="Enter your note"
       value={note}
       onChange={(e)=>setNote(e.target.value)} 
       />
      <button className="add-btn"
      onClick={()=>{
        if(note===""){
            return;
        }
        setNotes([...notes,note]);
        setNote("");
      } }
      >
        Add Note
        </button>
          {notes.map((item, index) => (
            <div key={index}>
            <p> {item}</p>
            <button className="edit-btn"
            onClick={()=>{
                const newNote=prompt("Edit note",item);

                if (newNote !== null && newNote !== "") { 
                const updatedNotes = [...notes];
                   updatedNotes[index] = newNote;
                   setNotes(updatedNotes);
            }

            } }
            >
             Edit
                
            </button>
           
        <button className="delete-btn"
          onClick={() => {
           setNotes(notes.filter((_, i) => i !== index));
         }}
        >
         Delete
       </button>
       </div>
     ))}
     </div>
  );
}

export default Notes;