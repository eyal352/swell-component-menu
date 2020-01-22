import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Select = props => {
  const style = {textTransform:'capitalize'}
  return (
    <Form.Group controlId={props.name}>
      <Form.Label>{props.title}</Form.Label>
      <Row>
        <Col>
          <Form.Control
            as='select'
            name={props.name}
            onChange={props.handleChange}
            style={style}
            value={props.value}
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
        </Col>
      </Row>
    </Form.Group>
  );
};

export default Select;
