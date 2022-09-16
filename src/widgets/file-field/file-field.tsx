import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { FileFieldProps } from "../../../types";
import { FilePicker } from "../file-picker/file-picker";
import styled from "styled-components";

const FileFieldRoot = styled.div.attrs(props => ({
  className: "react-simple-widget file-field " + props.className
}))`
  .file-picker {
    display: flex;
  }
`;

export const FileField = ({
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
}: FileFieldProps): any => {
  return (
    <FileFieldRoot>
      <CustomField name={name}>
        {({ error, touched, setValue, setTouched }) => (
          <FieldDecoration
            label={label}
            leading={leading}
            trailing={trailing}
            error={touched && error}
            helper={helper}
            disabled={disabled}>
            {({ onFieldFocus, onFieldBlur }) => (
              <FilePicker
                onChange={file => {
                  setValue(file);
                  if (onChange) onChange(file);
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
    </FileFieldRoot>
  );
};
