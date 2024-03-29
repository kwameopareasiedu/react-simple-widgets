import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { TextFieldProps } from "../../../types";
import styled from "styled-components";

const TextFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget text-field " + props.className
}))``;

export const TextField = ({
  name,
  label,
  helper,
  leading,
  trailing,
  disabled,
  onChange,
  onFocus,
  onBlur,
  ...rest
}: TextFieldProps): any => {
  return (
    <TextFieldRoot>
      <CustomField name={name}>
        {({ value, error, touched, setValue, setTouched }) => (
          <FieldDecoration
            label={label}
            leading={leading}
            trailing={trailing}
            error={touched && error}
            helper={helper}
            disabled={disabled}>
            {({ onFieldFocus, onFieldBlur }) => (
              <input
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
                {...rest}
              />
            )}
          </FieldDecoration>
        )}
      </CustomField>
    </TextFieldRoot>
  );
};
