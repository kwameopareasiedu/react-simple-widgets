import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { MultiDateFieldProps } from "../../../types";
import { MultiDatePicker } from "../multi-date-picker/multi-date-picker";
import styled from "styled-components";

const MultiDateFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget multi-date-field " + props.className
}))``;

export const MultiDateField = ({
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
}: MultiDateFieldProps): any => {
  return (
    <MultiDateFieldRoot>
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
              <MultiDatePicker
                value={value}
                onChange={dates => {
                  setValue(dates);
                  if (onChange) onChange(dates);
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
    </MultiDateFieldRoot>
  );
};
