import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: [],
    searchQuery: "",
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
        },
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
})

export const { addNote, editNote, deleteNote, updateSearchQuery} = notesSlice.actions

export default notesSlice.reducer