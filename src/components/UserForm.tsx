import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

const UserForm = () => {
  return (
    <>
      <label>First Name</label>
      <input autoFocus required type="text" />
      <label>Last Name</label>
      <input autoFocus required type="text" />
      <label>Age</label>
      <input required min={1} type="number" />
    </>
  );
};

export default UserForm;
