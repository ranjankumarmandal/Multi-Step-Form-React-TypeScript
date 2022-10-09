import React from 'react';
import './App.css';
import { useMultistepForm } from './utility/useMultistepForm';

function App() {
  const { steps, currentStepIndex } = useMultistepForm([]);
  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '1rem',
        borderRadius: '0.5rem',
        fontFamily: 'Arial',
      }}
    >
      <form>
        <div
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
          }}
        >
          1 / 2
        </div>
      </form>
    </div>
  );
}

export default App;
