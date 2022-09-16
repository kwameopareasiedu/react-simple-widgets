import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { DateFieldProps } from "../../../types";
import { DatePicker } from "../date-picker/date-picker";
import styled from "styled-components";

const DateFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget date-field " + props.className
}))``;

export const DateField = ({
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
}: DateFieldProps): any => {
  return (
    <DateFieldRoot>
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
              <DatePicker
                value={value}
                onChange={date => {
                  setValue(date);
                  if (onChange) onChange(date);
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
    </DateFieldRoot>
  );
};
