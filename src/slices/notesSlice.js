import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: [],
    loadedNotes: [],
    searchQuery: "",
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action)=>{
            state.notes = [...state.notes, action.payload];
            state.loadedNotes = [...state.loadedNotes, action.payload];
        },
        editNote: (state, action) => {
            state.notes= state.notes.map((note)=> note.id === action.payload.id ? action.payload : note)
            state.loadedNotes = state.loadedNotes.map((note) => note.id === action.payload.id ? action.payload : note
      );
        },
        deleteNote: (state, action) => {
            state.notes= state.notes.filter((note)=> note.id !== action.payload)
            state.loadedNotes = state.loadedNotes.filter((note) => note.id !== action.payload);
        },
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setLoadedNotes: (state, action) => {
            state.loadedNotes = action.payload;
            state.notes = [...state.notes, ...state.loadedNotes]
        }
    },
})

export const { addNote, editNote, deleteNote, updateSearchQuery, setLoadedNotes} = notesSlice.actions

export default notesSlice.reducer