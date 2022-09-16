import React from "react";
import { SelectOptionProps } from "../../../types";
import styled from "styled-components";

const SelectOptionRoot = styled.label.attrs(props => ({
  className: "react-simple-widget select-option " + props.className
}))`
  display: block;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  > * {
    vertical-align: middle;
  }

  input {
    width: 15px;
    height: 15px;
    margin-right: 4px;
  }
`;

export const SelectOption = ({
  label,
  selected,
  className,
  onSelect,
  multi,
  onFocus,
  ...rest
}: SelectOptionProps) => {
  const additionalClassNames = (): string => {
    const classes = [];
    if (className) classes.push(className);
    if (selected) classes.push("selected");
    return classes.join(" ");
  };

  return (
    <SelectOptionRoot className={additionalClassNames()}>
      <input
        type={!multi ? "radio" : "checkbox"}
        checked={selected}
        onFocus={onFocus}
        onChange={onSelect}
        {...rest}
      />
      <span>{label}</span>
    </SelectOptionRoot>
  );
};
