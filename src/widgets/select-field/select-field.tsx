import React, { Fragment } from "react";
import { CustomField } from "../custom-field/custom-field";
import { SelectFieldProps } from "../../../types";
import { SelectOption } from "./select-option";
import { FieldDecoration } from "../field-decoration/field-decoration";
import styled from "styled-components";

const SelectFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget select-field-root " + props.className
}))`
  &.inline {
    .field-decoration .field-decoration-content-container {
      border: none;

      .field-decoration-content {
        display: block;

        > .select-option {
          display: inline-block;
          width: auto;
          margin-right: 12px;
          margin-bottom: 2px;

          input {
            margin-right: 2px;
          }
        }
      }
    }
  }

  .field-decoration .field-decoration-content-container {
    border: none;

    .field-decoration-content {
      display: block;
    }
  }
`;

export const SelectField = ({
  name,
  label,
  options,
  inline,
  disabled,
  readOnly,
  className: _className,
  onChange,
  ...rest
}: SelectFieldProps): any => {
  const className = (): string => {
    const classes = [];
    if (_className) classes.push(_className);
    if (inline) classes.push("inline");
    return classes.join(" ");
  };

  return (
    <SelectFieldRoot className={className()} {...rest}>
      <CustomField name={name}>
        {({ value, error, touched, setValue, setTouched }): any => (
          <FieldDecoration
            label={label}
            error={touched && error}
            disabled={disabled}>
            {() => (
              <Fragment>
                {options.map(([optionLabel, optionValue]) => (
                  <SelectOption
                    key={optionValue}
                    label={optionLabel}
                    selected={value === optionValue}
                    disabled={disabled}
                    readOnly={readOnly}
                    onSelect={() => {
                      setValue(optionValue);
                      if (onChange) onChange(optionValue);
                    }}
                    onFocus={() => {
                      setTouched(true);
                    }}
                  />
                ))}
              </Fragment>
            )}
          </FieldDecoration>
        )}
      </CustomField>
    </SelectFieldRoot>
  );
};
