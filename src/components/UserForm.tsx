import React from "react";

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
