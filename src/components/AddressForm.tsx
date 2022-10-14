import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

const AddressForm = () => {
  return (
    <>
      <label>Street</label>
      <input autoFocus required type="text" />
      <label>City</label>
      <input autoFocus required type="text" />
      <label>State</label>
      <input autoFocus required type="text" />
      <label>Zip</label>
      <input required type="text" />
    </>
  );
};

export default AddressForm;
