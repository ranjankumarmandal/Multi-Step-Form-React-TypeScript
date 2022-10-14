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
      <div>{children}</div>
    </>
  );
};

export default FormWrapper;
