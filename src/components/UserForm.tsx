import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

interface UserFormProps {
  firstName: string;
  lastName: string;
  age: string;
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
      <input autoFocus required type="text" value={firstName} />
      <label>Last Name</label>
      <input autoFocus required type="text" value={lastName} />
      <label>Age</label>
      <input required min={1} type="number" value={age} />
    </FormWrapper>
  );
};

export default UserForm;
