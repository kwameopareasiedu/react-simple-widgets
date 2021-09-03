import "./password-field.scss";
import React, { useState } from "react";
import { PasswordField as IPasswordField } from "../../../types";
import { TextField } from "../text-field/text-field";
import HiddenIcon from "../../assets/hide.svg";
import VisibleIcon from "../../assets/eye.svg";

export const PasswordField = ({ ...rest }: IPasswordField): any => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const inputType = (): string => {
        if (passwordVisible) return "text";
        return "password";
    };

    return (
        <div className="react-simple-widget password-field">
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
        </div>
    );
};
