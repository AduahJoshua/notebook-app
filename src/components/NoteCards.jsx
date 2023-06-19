import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteNote } from '../slices/notesSlice';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import NoteEdit from './NoteEdit';

const NoteCards = () => {
    const state = useSelector((state) => {
        return state.notesReducer;
      });

    const dispatch = useDispatch();


      function deleteNoteHandler(id) {
        dispatch(deleteNote(id))
      }//// delete function
  
    
const [show, setShow] = useState(false);
const [preFill, setPreFill] = useState(null);
    
const handleClose = () => setShow(false);

    const handleShow = (note) => {
         setPreFill(note);
        setShow(true);
      };
    return (
        <>
            <div>
            {state.notes.map((note, index) => (
          <Card key={index} style={{ width: '18rem', marginBottom: '10px' }}>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Student Notes</Card.Subtitle>
              <Card.Text>
                <p>Date: {note.date}</p>
                <p>Note Description: {note.noteText}</p>
              </Card.Text>
              <Button variant="primary" onClick={()=>handleShow(note)}>
        Edit
      </Button>
              <Button variant="danger" onClick={()=>deleteNoteHandler(note.id)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}
            </div>
            <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Edit Notes Here</Modal.Title>
</Modal.Header>
                <Modal.Body>
                <NoteEdit prefill={preFill} closeModal={handleClose} />
                   </Modal.Body>
</Modal>
      </>
      
    );
}

export default NoteCards;



// <Button variant="primary" onClick={handleClose}>
// Save Changes
// </Button>
// prefill={preFill}
 