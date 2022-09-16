import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { CheckboxFieldProps } from "../../../types";
import styled from "styled-components";

const CheckboxFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget checkbox-field " + props.className
}))`
  .field-decoration .field-decoration-content-container {
    border: none;
    padding: 0;

    .field-decoration-content {
      :not(.leading):not(.trailing) {
        flex: none;

        > * {
          vertical-align: middle;
        }

        input {
          width: 15px;
          height: 15px;
          margin-right: 8px;
          vertical-align: middle;
        }
      }

      :not(.leading):not(.trailing):hover {
        cursor: pointer;
      }
    }
  }
`;

export const CheckboxField = ({
  name,
  label,
  disabled,
  onChange,
  onFocus,
  ...rest
}: CheckboxFieldProps): any => {
  return (
    <CheckboxFieldRoot>
      <CustomField name={name}>
        {({ value, error, touched, setValue, setTouched }) => (
          <FieldDecoration error={touched && error} disabled={disabled}>
            {() => (
              <label>
                <input
                  name={name}
                  checked={value}
                  type="checkbox"
                  disabled={disabled}
                  onChange={e => {
                    const checked = e.target.checked;
                    setValue(checked);
                    if (onChange) onChange(checked);
                  }}
                  onFocus={e => {
                    setTouched(true);
                    if (onFocus) onFocus(e);
                  }}
                  {...rest}
                />

                <span className="mb-0">{label}</span>
              </label>
            )}
          </FieldDecoration>
        )}
      </CustomField>
    </CheckboxFieldRoot>
  );
};
