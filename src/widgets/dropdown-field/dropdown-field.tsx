import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { DropdownFieldProps } from "../../../types";
import styled from "styled-components";

const DropdownFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget dropdown-field " + props.className
}))``;

export const DropdownField = ({
  name,
  label,
  helper,
  leading,
  trailing,
  disabled,
  onChange,
  onFocus,
  onBlur,
  children,
  ...rest
}: DropdownFieldProps) => {
  return (
    <DropdownFieldRoot>
      <CustomField name={name}>
        {({ value, error, touched, setTouched, setValue }): any => (
          <FieldDecoration
            label={label}
            helper={helper}
            leading={leading}
            trailing={trailing}
            error={touched && error}
            disabled={disabled}>
            {({ onFieldFocus, onFieldBlur }): any => (
              <select
                name={name}
                value={value}
                onChange={e => {
                  const val = e.target.value;
                  setValue(val);
                  if (onChange) onChange(val);
                }}
                onFocus={e => {
                  onFieldFocus();
                  setTouched(true);
                  if (onFocus) onFocus(e);
                }}
                onBlur={e => {
                  onFieldBlur();
                  if (onBlur) onBlur(e);
                }}
                {...rest}>
                {children}
              </select>
            )}
          </FieldDecoration>
        )}
      </CustomField>
    </DropdownFieldRoot>
  );
};
