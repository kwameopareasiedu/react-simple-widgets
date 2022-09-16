import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { TagFieldProps } from "../../../types";
import { TagInput } from "../tag-input/tag-input";
import styled from "styled-components";

const TagFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget tag-field " + props.className
}))``;

export const TagField = ({
  name,
  label,
  helper,
  leading,
  trailing,
  disabled,
  validator,
  onInputError,
  onChange,
  onFocus,
  onBlur,
  ...rest
}: TagFieldProps): any => {
  return (
    <TagFieldRoot>
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
              <TagInput
                value={value}
                validator={validator}
                onInputError={onInputError}
                onChange={tags => {
                  setValue(tags);
                  if (onChange) onChange(tags);
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
    </TagFieldRoot>
  );
};
