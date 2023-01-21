import React from "react";
import "./Input.css";

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className="input">
      <label htmlFor={input.id}>{label}</label>
      <input {...input} ref={ref} />
    </div>
  );
});

export default Input;
