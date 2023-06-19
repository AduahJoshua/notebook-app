import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editNote } from '../slices/notesSlice';
import { useState } from 'react';



function NoteEdit({prefill, closeModal}) {

  const [track, setTrack] = useState({
    id: prefill.id,
    title: prefill.title,
    date: prefill.date,
    noteText: prefill.noteText
  });

  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    e.preventDefault()
    setTrack({ ...track, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    e.preventDefault()
    console.log(track)
    dispatch(editNote(track));
    closeModal();
  };


  return (
    <>

      <div>
      <Form onSubmit={handleEditChange}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter note title"  name="title"
            value={track.title}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date"  name="date"
            value={track.date}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Note description </Form.Label>
          <Form.Control as="textarea" rows={4} placeholder='enter your notes'  name="noteText"
            value={track.noteText}
            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button> 
      </Form> 


      </div>
      

    </>
  )
}

export default NoteEdit



