import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Select = props => {
    const style = {textTransform:'capitalize'}
  return (
    <Row>
      <Col>
        <Form.Group controlId={props.name}>
          <Form.Label>{props.title}</Form.Label>
          <Form.Control
            as='select'
            name={props.name}
            onChange={props.handleChange}
            style={style}
          >
            {props.options.map((option, ind) => {
              return (
                <option key={ind} name={option} value={option}>
                  {' '}
                  {option.split('_').join(' ')}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default Select;
