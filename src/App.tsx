import React, { useState, FormEvent } from "react";
import "./App.css";
import { useMultistepForm } from "./utility/useMultistepForm";
import UserForm from "./components/UserForm";
import AddressForm from "./components/AddressForm";
import AccountForm from "./components/AccountForm";

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}

function App() {
  const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const { steps, currentStepIndex, step, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

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
      <form onSubmit={handleSubmit}>
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
          <button type="submit">
            {currentStepIndex === steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
