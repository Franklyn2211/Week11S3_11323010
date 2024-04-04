import './App.css';
import React, { useState } from 'react';
import FormExample from './Form.js';
import ColorChange from './Color.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <FormExample />
        <ColorChange />
      </div>
    )
  }
}


export default App;