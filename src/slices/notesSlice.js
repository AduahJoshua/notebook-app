import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
    notes: [
        {
            id : nanoid(),
            title: "Physics",
            date: "02/04/2000",
            noteText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a neque repellendus, maiores aperiam ex minima iure asperiores? Iste esse eligendi eveniet explicabo earum quidem quas odit nemo officiis dolores."
        },
        {
            id: nanoid(),
            title: "Chemistry",
            date: "03/04/2000",
            noteText: "Dolor sit amet consectetur adipisicing elit. Assumenda a neque repellendus, maiores aperiam ex minima iure asperiores? Iste esse eligendi"
        }
    ]
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action)=>{
            state.notes = [...state.notes, action.payload]
        },
        editNote: (state, action) => {
            state.notes= state.notes.map((note)=> note.id === action.payload.id ? action.payload : note)
        },
        deleteNote: (state, action) => {
            state.notes= state.notes.filter((note)=> note.id !== action.payload)
        }
    },
})

export const { addNote, editNote, deleteNote} = notesSlice.actions

export default notesSlice.reducer