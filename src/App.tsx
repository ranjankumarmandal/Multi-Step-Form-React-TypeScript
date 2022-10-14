import React from "react";
import "./App.css";
import { useMultistepForm } from "./utility/useMultistepForm";
import UserForm from "./components/UserForm";
import AddressForm from "./components/AddressForm";
import AccountForm from "./components/AccountForm";

function App() {
  const { steps, currentStepIndex, step, back, next } = useMultistepForm([
    <UserForm />,
    <AddressForm />,
  ]);
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Arial",
      }}
    >
      <form>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          {currentStepIndex !== 0 && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="button" onClick={next}>
            {currentStepIndex === steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
