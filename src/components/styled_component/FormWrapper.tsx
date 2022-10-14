import React, { ReactNode } from "react";

interface formWrapperProps {
  title: string;
  children: ReactNode;
}

const FormWrapper = ({ title, children }: formWrapperProps) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
};

export default FormWrapper;
