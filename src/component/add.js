import React, { useState } from "react";
import { Button, Modal,Form } from "react-bootstrap";

const Add = ({movieAdd}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [title, setTitle] = useState('');
const [src, setSrc] = useState('');
const [rating, setRating] = useState(0);
const [text, setText] = useState('');
  return (
    <>
      <Button variant="primary"  onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control placeholder="Title" onChange={(title)=>setTitle(title.target.value)}/>
        <Form.Control placeholder="image source" onChange={(e)=>setSrc(e.target.value)}/>
        <Form.Control placeholder="rating" onChange={(e)=>setRating(e.target.value)}/>
        <Form.Control as="textarea" rows={3} placeholder="description" onChange={(e)=>setText(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose()
        movieAdd(title,src,rating,text)}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;