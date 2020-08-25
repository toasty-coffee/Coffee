import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './CoffeeForm.css';

export const CoffeeForm = () => {
  const [secondsFrequency, setSeconds] = useState('0');
  const [minutesFrequency, setMinutes] = useState('5');
  const [distance, setDistance] = useState('1');
  const secondsRegex = /^(?:[0-5][0-9]?|[6]|[7]|[8]|[9])$/;
  const minutesRegex = /^([1-9][0-9]{0,2}|1000)$/;
  const pixelsRegex = /^0*(?:[1-9][0-9]?|100)$/;

  const validateSeconds = input => {
    if (input.match(secondsRegex) || input === '') {
      console.log('test');
      setSeconds(input);
    }
  };

  const validateMinutes = input => {
    if (input.match(minutesRegex) || input === '') {
      console.log('test');
      setMinutes(input);
    }
  };

  const validatePixels = input => {
    if (input.match(pixelsRegex) || input === '') {
      console.log('test');
      setDistance(input);
    }
  };

  return (
    <div className="coffee-form">
      <Form>
        <Form.Field>
          <label>Movement frequency</label>
          <Input
            value={secondsFrequency}
            onChange={event => validateSeconds(event.target.value)}
            placeholder="0"
            label={{ basic: true, content: 'seconds' }}
            labelPosition="left"
          />
          <Input
            value={minutesFrequency}
            onChange={event => validateMinutes(event.target.value)}
            placeholder="5"
            label={{ basic: true, content: 'minutes' }}
            labelPosition="right"
          />
        </Form.Field>
        <Form.Field>
          <label>Distance to move cursor</label>
          <Input
            value={distance}
            onChange={event => validatePixels(event.target.value)}
            placeholder="1"
            label={{ basic: true, content: 'pixels' }}
            labelPosition="right"
          />
        </Form.Field>
      </Form>
    </div>
  );
};
