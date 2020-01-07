import React from 'react';
import './App.css';
import Coba from './Test.js';
import { Button } from 'reactstrap'
import Example from './Navbar.js';


const App = () => {
  return (
    <div>
        <h1>Hewan</h1>
        <Example />
        <Coba />
        <Button color="primary">Save</Button>
    </div>
  );
}

export default App;
