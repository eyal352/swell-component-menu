import React from 'react';
import { Form } from 'react-bootstrap';

const CheckBox = (props) => {
    return (
      <Form.Group controlId={props.name}>
        <Form.Label>{props.title}</Form.Label>
        <div className='mb-3'>
          {props.options.map((icon, ind) => (
            <Form.Check
              inline
              type='checkbox'
              key={ind}
              id={`default-icon ${icon}`}
              label={icon}
              value={icon}
              onChange={props.handleChange}
              checked={props.selectedOptions.indexOf(icon) > -1}
            />
          ))}
        </div>
      </Form.Group>
    );
}

export default CheckBox