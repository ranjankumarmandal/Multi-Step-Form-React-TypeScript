import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

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
