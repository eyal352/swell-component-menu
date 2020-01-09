import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const CheckBox = (props) => {
    return (
      <Form.Group controlId={props.name}>
        <Form.Label>{props.title}</Form.Label>
        <div className='mb-3'>
          <Row className='justify-content-md-center'>
            {props.options.map((icon, ind) => (
              <Col key={ind}>
                <Form.Check
                  inline
                  type='checkbox'
                  id={`default-icon ${icon}`}
                  label={icon}
                  value={icon}
                  onChange={props.handleChange}
                  checked={props.selectedOptions.indexOf(icon) > -1}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Form.Group>
    );
}

export default CheckBox