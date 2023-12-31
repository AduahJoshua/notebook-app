/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../slices/notesSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Button, Stack, TextField, TextareaAutosize } from "@mui/material";
import useCreateDate from "../hooks/useCreateDate";

const NoteForm = ({ closeModal }) => {
  const date = useCreateDate();
  const [note, setNote] = useState({
    id: nanoid(),
    title: "",
    noteText: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    if(note.title.trim()=== "" || note.noteText.trim()== "") {
      alert ("No note will be created");
      return;
    }
    dispatch(addNote(note));
    
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNote({
      ...note,
      created_date: date,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Stack
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        spacing={8}
      >
        <div className="d-flex justify-content-between">
          <TextField
            placeholder="Title"
            variant="standard"
            onChange={handleChange}
            id="title"
            name="title"
            value={note.title}
            sx={{
              width: "70%",
              "& .MuiInputBase-input": {
                fontSize: "calc(1rem + 2vw)",
              },
            }}
          />
          <Button
            type="submit"
            className="align-self-center bg-primary text-white fw-bold"
          >
            Add Note
          </Button>
        </div>
        <TextareaAutosize
          onChange={handleChange}
          id="noteText"
          name="noteText"
          value={note.noteText}
          className="form-textarea"
          minRows={30}
          placeholder="Type notes here..."
        />
      </Stack>
    </>
  );
};

export default NoteForm;
