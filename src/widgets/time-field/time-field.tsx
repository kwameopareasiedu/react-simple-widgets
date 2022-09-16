import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { TimeFieldProps } from "../../../types";
import { TimePicker } from "../time-picker/time-picker";
import styled from "styled-components";

const TimeFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget time-field " + props.className
}))`
  .time-picker {
    display: flex;
  }
`;

export const TimeField = ({
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
}: TimeFieldProps): any => {
  return (
    <TimeFieldRoot>
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
              <TimePicker
                value={value || undefined}
                onChange={time => {
                  setValue(time);
                  if (onChange) onChange(time);
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
    </TimeFieldRoot>
  );
};
