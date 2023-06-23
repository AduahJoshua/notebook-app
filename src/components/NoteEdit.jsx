/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editNote } from "../slices/notesSlice";
import { useState } from "react";
import { Stack, TextField, TextareaAutosize } from "@mui/material";
import useCreateDate from "../hooks/useCreateDate";

function NoteEdit({ prefill, closeModal }) {
  const date = useCreateDate();
  const [track, setTrack] = useState({
    id: prefill.id,
    title: prefill.title,
    created_date: prefill.created_date,
    noteText: prefill.noteText,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setTrack({
      modified_date: date,
      ...track,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditChange = (e) => {
    e.preventDefault();
    console.log(track);
    dispatch(editNote(track));
    closeModal();
  };

  return (
    <>
      <Stack
        component="form"
        autoComplete="off"
        onSubmit={handleEditChange}
        spacing={8}
      >
        <div className="d-flex justify-content-between">
          <TextField
            placeholder="Title"
            variant="standard"
            onChange={handleChange}
            id="title"
            name="title"
            value={track.title}
            sx={{
              width: "70%",
              "& .MuiInputBase-input": {
                fontSize: "calc(1rem + 2vw)",
              },
            }}
            required
          />
          <Button
            variant="contained"
            type="submit"
            className="align-self-center bg-success text-white fw-bold"
          >
            SAVE
          </Button>
        </div>
        <TextareaAutosize
          onChange={handleChange}
          id="noteText"
          name="noteText"
          value={track.noteText}
          className="form-textarea"
          minRows={40}
          placeholder="Type notes here..."
          required
        />
      </Stack>
    </>
  );
}

export default NoteEdit;
