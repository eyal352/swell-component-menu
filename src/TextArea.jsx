import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const TextArea = props => {
  return (
    <Form.Group controlId={props.name}>
      <Form.Label>{props.title}</Form.Label>
      <Row>
        <Col>
          <Form.Control
            as='textarea'
            rows={props.rows}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
          />
        </Col>
      </Row>
    </Form.Group>
  );
};

export default TextArea;
