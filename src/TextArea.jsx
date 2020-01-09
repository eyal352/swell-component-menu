import React from 'react';
import { Form } from 'react-bootstrap';

const TextArea = props => {
  return (
    <Form.Group controlId={props.name}>
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        as='textarea'
        rows={props.rows}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
    </Form.Group>
  );
};

export default TextArea;
