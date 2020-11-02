import "./index.scss";
import React, { useState } from "react";
import { TextField } from "../text-field";
import { TextField as Props, TextFieldMode } from "../text-field/types";
import VisibleIcon from "../../assets/eye.svg";
import HiddenIcon from "../../assets/hide.svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PasswordField = ({ mode, type, ...rest }: Props): any => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const inputType = (): string => {
        if (passwordVisible) return "text";
        return "password";
    };

    const trailing = (): any => {
        return (
            <img
                alt="Visibility"
                src={passwordVisible ? HiddenIcon : VisibleIcon}
                onClick={(): void => setPasswordVisible(!passwordVisible)}
            />
        );
    };

    return (
        <div className="react-simple-widget password-field">
            <TextField mode={TextFieldMode.INPUT} type={inputType()} trailing={trailing()} {...rest} />
        </div>
    );
};
