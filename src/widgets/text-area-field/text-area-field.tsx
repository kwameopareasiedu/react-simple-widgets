import "./text-area-field.scss";
import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { TextAreaFieldProps } from "../../../types";

export const TextAreaField = ({
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
}: TextAreaFieldProps): any => {
  return (
    <div className="react-simple-widget text-area-field">
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
              <textarea
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
    </div>
  );
};
