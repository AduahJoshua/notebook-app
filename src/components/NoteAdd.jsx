import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { addNote } from '../slices/notesSlice';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';


const NoteAdd = () => {
  const [note, setNote] = useState({
    title: "",
    date: "",
    noteText: ""
  });

  const dispatch =useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(note);
    dispatch(addNote(note));
    
  };

  const handleChange=(e)=>{
    e.preventDefault()
    setNote({
      ...note,
      id: nanoid(),
      [e.target.name]: e.target.value,
    });
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter note title"  name="title"
            value={note.title}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date"  name="date"
            value={note.date}
            onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Note description </Form.Label>
          <Form.Control as="textarea" rows={4} placeholder='enter your notes'  name="noteText"
            value={note.noteText}
            onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button> 
      </Form>
    </div>
  );
}

export default NoteAdd;
