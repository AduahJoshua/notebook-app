/* eslint-disable no-unused-vars */
import { AddCircle } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import React, { useEffect } from "react";
import NoteForm from "./NoteForm";
import style from "./modalStyles";

function AddNote() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [username, setUsername] = React.useState("User Note");

  // useEffect(() => {
  //   const enteredName = window.prompt("Enter Your Name");
  //   if (enteredName) {
  //     setUsername(enteredName);
  //   }
  // }, []);

  return (
    <>
      <div className="my-3 mt-lg-5">
        <h1 className="fs-6">{/*{`${username}'s Notes`}*/} Add Notes Here</h1>
        <div onClick={handleOpen} style={{ cursor: "pointer" }}>
          <AddCircle sx={{ fontSize: "3rem" }} />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal__backdrop"
      >
        <Box sx={style}>
          <NoteForm closeModal={handleClose} />
        </Box>
      </Modal>
    </>
  );
}

export default AddNote;
