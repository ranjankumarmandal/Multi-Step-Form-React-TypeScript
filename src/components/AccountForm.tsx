import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

interface BasicProps {
  email: string;
  password: string;
}

interface AccountFormProps extends BasicProps {
  updateFields: (fields: Partial<BasicProps>) => void;
}

const AccountForm = () => {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input autoFocus required type="email" />
      <label>Password</label>
      <input required type="password" />
    </FormWrapper>
  );
};

export default AccountForm;
