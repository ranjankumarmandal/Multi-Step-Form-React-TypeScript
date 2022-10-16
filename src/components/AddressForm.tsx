import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

interface BasicProps {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface UserFormProps extends BasicProps {
  updateFields: (fields: Partial<BasicProps>) => void;
}

const AddressForm = () => {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input autoFocus required type="text" />
      <label>City</label>
      <input autoFocus required type="text" />
      <label>State</label>
      <input autoFocus required type="text" />
      <label>Zip</label>
      <input required type="text" />
    </FormWrapper>
  );
};

export default AddressForm;
