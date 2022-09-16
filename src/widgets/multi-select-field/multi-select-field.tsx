import React, { Fragment } from "react";
import { CustomField } from "../custom-field/custom-field";
import { MultiSelectFieldProps } from "../../../types";
import { SelectOption } from "../select-field/select-option";
import { FieldDecoration } from "../field-decoration/field-decoration";
import styled from "styled-components";

const MultiSelectFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget multi-select-field " + props.className
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

export const MultiSelectField = ({
  name,
  label,
  options,
  inline,
  disabled,
  readOnly,
  className,
  onChange,
  ...rest
}: MultiSelectFieldProps): any => {
  const additionalClassNames = (): string => {
    const classes = [];
    if (className) classes.push(className);
    if (inline) classes.push("inline");
    return classes.join(" ");
  };

  return (
    <MultiSelectFieldRoot className={additionalClassNames()} {...rest}>
      <CustomField name={name}>
        {({ value, error, touched, setValue, setTouched }): any => (
          <FieldDecoration label={label} error={touched && error}>
            {() => (
              <Fragment>
                {options.map(([optionLabel, optionValue]) => (
                  <SelectOption
                    key={optionValue}
                    label={optionLabel}
                    selected={(value || []).includes(optionValue)}
                    onSelect={() => {
                      if (!Array.isArray(value)) {
                        setValue([optionValue]);
                        if (onChange) onChange([optionValue]);
                      } else {
                        const values: Array<any> = value;
                        const newValue = values.includes(optionValue)
                          ? values.filter(v => v !== optionValue)
                          : [...values, optionValue];

                        setValue(newValue);
                        if (onChange) onChange(newValue);
                      }
                    }}
                    onFocus={() => {
                      setTouched(true);
                    }}
                    readOnly={readOnly}
                    disabled={disabled}
                    multi
                  />
                ))}
              </Fragment>
            )}
          </FieldDecoration>
        )}
      </CustomField>
    </MultiSelectFieldRoot>
  );
};
