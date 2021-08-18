import React, { useState } from 'react';
import { Counter } from './features/counter/Counter';
import PlayButton from './components/PlayButton';
import './App.css';

function App() {
  // 전역 상태
  /**
   * playerState
   * theme
   */
  const [playerState, setPlayerState] = useState('STOP');

  const togglePlayButton = (playerState) => {
    switch (playerState) {
      case 'PLAYING':
        setPlayerState('PAUSE');
        break;
      case 'PAUSE':
      case 'STOP':
        setPlayerState('PLAYING');
        break;
      // no default
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <PlayButton
          playerState={playerState}
          togglePlayButton={togglePlayButton}
        ></PlayButton>
        <Counter />
      </header>
    </div>
  );
}

export default App;
