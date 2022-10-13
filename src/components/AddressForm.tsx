import React from "react";

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
