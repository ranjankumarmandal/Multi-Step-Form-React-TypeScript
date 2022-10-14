import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

const AccountForm = () => {
  return (
    <>
      <label>Email</label>
      <input autoFocus required type="email" />
      <label>Password</label>
      <input required type="password" />
    </>
  );
};

export default AccountForm;
