import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './CoffeeForm.css';

export const CoffeeForm = () => {
  const [frequency, setFrequency] = useState('60');
  const [distance, setDistance] = useState('1');

  return (
    <div className="coffee-form">
      <Form>
        <Form.Field>
          <label>Movement frequency</label>
          <Input
            onChange={event => setFrequency(event.target.value)}
            placeholder="60"
            label={{ basic: true, content: 'seconds' }}
            labelPosition="right"
          />
        </Form.Field>
        <Form.Field>
          <label>Distance to move cursor</label>
          <Input
            onChange={event => setDistance(event.target.value)}
            placeholder="1"
            label={{ basic: true, content: 'pixels' }}
            labelPosition="right"
          />
        </Form.Field>
      </Form>
    </div>
  );
};
