import "./select-option.scss";
import React from "react";
import { SelectOptionProps } from "../../../types";

export const SelectOption = ({
  label,
  selected,
  onSelect,
  multi,
  onFocus,
  ...rest
}: SelectOptionProps) => {
  const className = (): string => {
    const classes = ["react-simple-widget", "select-option"];
    if (selected) classes.push("selected");
    return classes.join(" ");
  };

  return (
    <label className={className()}>
      <input
        type={!multi ? "radio" : "checkbox"}
        checked={selected}
        onFocus={onFocus}
        onChange={onSelect}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
};
