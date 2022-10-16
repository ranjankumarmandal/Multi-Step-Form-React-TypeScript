import React from "react";
import FormWrapper from "./styled_component/FormWrapper";

interface BasicProps {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface AddressFormProps extends BasicProps {
  updateFields: (fields: Partial<BasicProps>) => void;
}

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input autoFocus required type="text" value={city} />
      <label>State</label>
      <input autoFocus required type="text" value={state} />
      <label>Zip</label>
      <input required type="text" value={zip} />
    </FormWrapper>
  );
};

export default AddressForm;
