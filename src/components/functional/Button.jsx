import React from "react";

const Button = ({ onclick, label }) => {
  return <button onClick={onclick}> {label}</button>;
};

export default Button;
