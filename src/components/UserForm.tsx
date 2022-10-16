import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

interface UserFormProps {
  firstName: string;
  lastName: string;
  age: string;
}

const UserForm = ({ firstName, lastName, age }: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input autoFocus required type="text" />
      <label>Last Name</label>
      <input autoFocus required type="text" />
      <label>Age</label>
      <input required min={1} type="number" />
    </FormWrapper>
  );
};

export default UserForm;
