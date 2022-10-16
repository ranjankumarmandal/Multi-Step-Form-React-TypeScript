import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

interface BasicProps {
  email: string;
  password: string;
}

interface AccountFormProps extends BasicProps {
  updateFields: (fields: Partial<BasicProps>) => void;
}

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
