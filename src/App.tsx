import React from 'react';
import './App.scss';
import Board from './components/Board/Board';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Wordle</header>
      <div className='board-container'>
        <Board />
      </div>
      <div className='keyboard-container'>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
