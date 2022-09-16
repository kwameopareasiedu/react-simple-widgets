import React, { useState } from "react";
import { PasswordFieldProps } from "../../../types";
import { TextField } from "../text-field/text-field";
import HiddenIcon from "../../assets/hide.svg";
import VisibleIcon from "../../assets/eye.svg";
import styled from "styled-components";

const PasswordFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget password-field " + props.className
}))`
  .toggle-btn {
    width: 35px;
    border: none;
    background-color: transparent;
  }

  .toggle-btn:focus,
  .toggle-btn:hover {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

export const PasswordField = ({ ...rest }: PasswordFieldProps): any => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputType = (): string => {
    if (passwordVisible) return "text";
    return "password";
  };

  return (
    <PasswordFieldRoot>
      <TextField
        {...rest}
        type={inputType()}
        trailing={
          <button type="button" className="toggle-btn">
            <img
              alt="Visibility"
              src={passwordVisible ? HiddenIcon : VisibleIcon}
              onClick={(): void => setPasswordVisible(!passwordVisible)}
            />
          </button>
        }
      />
    </PasswordFieldRoot>
  );
};
