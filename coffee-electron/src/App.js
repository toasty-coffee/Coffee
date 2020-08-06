import React from 'react';
import { Header, Radio } from 'semantic-ui-react';
import { CoffeeForm } from './CoffeeForm';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header as="h1">Coffee</Header>
      <CoffeeForm />
      <Radio toggle />
    </div>
  );
};
