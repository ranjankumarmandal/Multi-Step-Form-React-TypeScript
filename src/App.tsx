import React from 'react';
import './App.css';
import { useMultistepForm } from './utility/useMultistepForm';

function App() {
  const { steps, currentStepIndex, step } = useMultistepForm([
    <div>One</div>,
    <div>Two</div>,
  ]);
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
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'flex-end'
        }}>
          <button>Back</button>
          <button>Next</button>
        </div>
      </form>
    </div>
  );
}

export default App;
