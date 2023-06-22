/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { deleteNote, setLoadedNotes } from "../slices/notesSlice";
import { useState } from "react";
import NoteEdit from "./NoteEdit";
import { LuEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Box, Modal } from "@mui/material";
import style from "./modalStyles";

const NoteCards = () => {
  const state = useSelector((state) => {
    return state.notesReducer;
  });

  const dispatch = useDispatch();

  function deleteNoteHandler(id) {
    dispatch(deleteNote(id));
  } //// delete function

  const [open, setOpen] = useState(false);
  const [preFill, setPreFill] = useState(null);

  const handleClose = () => setOpen(false);

  const handleOpen = (note) => {
    setPreFill(note);
    setOpen(true);
  };

  const filteredNotes = state.notes.filter(
    (note) =>
      note.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      note.noteText.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    if (savedNotes) {
      dispatch(setLoadedNotes(savedNotes));
        }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(state.notes));
  }, [state.notes]);

  return (
    <>
      <div className="note_card__container mt-4">
        {filteredNotes.map((note) => (
          <Card key={note.id} className="border-0 note__card">
            <Card.Body>
              <div className=" d-flex justify-content-between">
                <Card.Title className="fw-bold text-success">
                  {note.title}
                </Card.Title>
                <div
                  onClick={() => deleteNoteHandler(note.id)}
                  style={{cursor: "pointer"}}
                  className="rounded-circle bg-transparent border-0 note_card__action"
                >
                  <MdDelete color="#dc3545" className="action"/>
                </div>
              </div>
              <Card.Subtitle className="mb-2 text-muted">
                Student Notes
              </Card.Subtitle>
              <Card.Text>
                <small>
                  <span className="fw-bold text-muted">Date created: </span>
                  {note.created_date} <br />
                  <span className="fw-bold text-muted">Date modified: </span>
                  {note.modified_date}
                </small>
                <br />
                <small>
                  <span className="fw-bold text-muted">Note Description: </span>
                  {note.noteText.length > 40 ? (
                    <>
                      {note.noteText.substring(0, 50)}
                      <span className="fw-bolder">...</span>
                    </>
                  ) : (
                    note.noteText
                  )}
                </small>
              </Card.Text>
              <div
                onClick={() => handleOpen(note)}
                style={{cursor: "pointer"}}
                className="rounded-circle note_card__action"
              >
                <LuEdit color="#ffc107" className="action"/>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal__backdrop"
      >
        <Box sx={style}>
          <NoteEdit closeModal={handleClose} prefill={preFill} />
        </Box>
      </Modal>
    </>
  );
};

export default NoteCards;
