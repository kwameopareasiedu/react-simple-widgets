import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { TextAreaFieldProps } from "../../../types";
import styled from "styled-components";

const TextAreaFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget text-area-field " + props.className
}))`
  .field-decoration-content-container {
    .field-decoration-content {
      align-items: start;

      .leading,
      .trailing {
        margin-top: 5px;
      }

      textarea {
        min-height: 50px;
      }
    }
  }
`;

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
    <TextAreaFieldRoot>
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
    </TextAreaFieldRoot>
  );
};
