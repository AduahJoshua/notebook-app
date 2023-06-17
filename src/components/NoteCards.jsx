import React from 'react';
import { useSelector } from 'react-redux';


const NoteCards = () => {
    const state = useSelector((state) => {
        return state.notesReducer;
      });

    return (
        <>
            {state.notes.map((note, index) => (
                <div key={index}>
                    <p>Note Title:{note.title}</p>
                    <p>Date: {note.date}</p>
                    <p>Note Description: {note.noteText}</p>
                </div>
            ))}
        </>
    );
}

export default NoteCards;
