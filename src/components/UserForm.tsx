import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

interface BasicProps {
  firstName: string;
  lastName: string;
  age: string;
}

interface UserFormProps extends BasicProps {
  updateFields: (fields: Partial<BasicProps>) => void;
}

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input autoFocus required type="text" value={lastName} />
      <label>Age</label>
      <input required min={1} type="number" value={age} />
    </FormWrapper>
  );
};

export default UserForm;
