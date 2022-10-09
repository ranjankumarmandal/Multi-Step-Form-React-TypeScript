import { ReactElement, useState } from 'react';

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStateIndex] = useState(0);

  const next = () => {
    setCurrentStateIndex((i) => {
      if (i >= steps.length - 1) return 1;
      return i + 1;
    });
  };
}
