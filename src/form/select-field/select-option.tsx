import "./select-option.scss";
import React from "react";

export enum SelectOptionType {
    CHECK,
    RADIO
}

interface ISelectOption {
    value: any;
    label: string;
    inline: boolean;
    selected: boolean;
    type: SelectOptionType;
    onChange: (value: any) => void;
    onFocus: () => void;
}

/** SelectOption is a selectable option for use within a SelectField */
export const SelectOption = ({ type, label, value, selected, inline, onChange, onFocus }: ISelectOption) => {
    const className = (): string => {
        const classes = ["react-simple-widget", "select-option"];
        if (type === SelectOptionType.CHECK) classes.push("check");
        if (type === SelectOptionType.RADIO) classes.push("radio");
        if (selected) classes.push("selected");
        if (inline) classes.push("inline");
        return classes.join(" ");
    };

    const interceptChange = (): void => {
        if (type === SelectOptionType.RADIO && selected) return;
        onChange(value);
    };

    const interceptOnKeyUp = (e: React.KeyboardEvent) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            interceptChange();
            return false;
        }
    };

    return (
        <div className={className()} onClick={interceptChange} tabIndex={0} onFocus={onFocus} onKeyUp={interceptOnKeyUp}>
            <span className="indicator" />
            <label>{label}</label>
        </div>
    );
};
