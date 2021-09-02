import "./select-option.scss";
import React from "react";
import { SelectOption as ISelectOption } from "../../../types";

export const SelectOption = ({ label, selected, onSelect, onFocus }: ISelectOption) => {
    const className = (): string => {
        const classes = ["react-simple-widget", "select-option"];
        if (selected) classes.push("selected");
        return classes.join(" ");
    };

    return (
        <label className={className()}>
            <input type="radio" checked={selected} onFocus={onFocus} onChange={onSelect} />
            <span>{label}</span>
        </label>
    );
};
