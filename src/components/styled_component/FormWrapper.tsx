import React, { ReactNode } from "react";

interface formWrapperProps {
  title: string;
  children: ReactNode;
}

const FormWrapper = ({ title, children }: formWrapperProps) => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem 0.5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmac(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
