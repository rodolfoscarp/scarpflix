import React from "react";
import { FormItem } from "./styles";

const FormField = ({ value, handleChange, name, type, label }) => {
  return (
    <FormItem>
      {type === "textarea" ? (
        <textarea value={value} onChange={handleChange} name={name} id={name} />
      ) : (
        <input
          value={value}
          onChange={handleChange}
          name={name}
          type={type}
          id={name}
        />
      )}
      <label for={name}>{label}</label>
    </FormItem>
  );
};

export default FormField;
