import React, { useState, cloneElement } from "react";
import { FieldDecorationProps } from "../../../types";
import styled from "styled-components";

const FieldDecorationRoot = styled.div.attrs(props => ({
  className: "react-simple-widget field-decoration " + props.className
}))`
  &.has-focus {
    .field-decoration-content-container {
      border-color: var(--rsw-primary-color);

      > label {
        color: var(--rsw-primary-color);
      }
    }
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;

    * {
      pointer-events: none;
    }
  }

  .field-decoration-content-container {
    --border-width: 2px;

    position: relative;
    border-radius: 4px;
    border: var(--border-width) solid var(--rsw-secondary-color);
    padding: 8px 8px 4px;

    > label {
      position: absolute;
      top: -10px;
      left: 6px;
      margin: 0;
      padding: 0 4px;
      font-size: 75%;
      color: var(--rsw-label-color);
      background-color: white;
    }

    > .field-decoration-content {
      display: flex;
      align-items: center;

      > :not(.leading):not(.trailing) {
        flex: 1 1;
        width: 100%;
        outline: none;
        border: none;
      }
    }
  }

  > .field-decoration-footer {
    display: flex;
    padding: 0 10px;
    justify-content: flex-end;

    .helper,
    .error {
      margin: 0;
      font-size: 75%;
    }

    .error {
      color: var(--rsw-error-color);
      flex: 1 1;
    }
  }
`;

export const FieldDecoration = ({
  label,
  leading,
  trailing,
  error,
  helper,
  disabled,
  children,
  className,
  ...rest
}: FieldDecorationProps) => {
  const [focused, setFocused] = useState(false);

  const additionalClassNames = (): string => {
    const classes = [];

    if (className) classes.push(className);
    if (leading) classes.push("has-leading");
    if (trailing) classes.push("has-trailing");
    if (focused) classes.push("has-focus");
    if (error) classes.push("has-error");
    if (helper) classes.push("has-helper");
    if (disabled) classes.push("disabled");

    return classes.join(" ");
  };

  const child = children({
    onFieldFocus: (): void => setFocused(true),
    onFieldBlur: (): void => setFocused(false)
  });

  return (
    <FieldDecorationRoot className={additionalClassNames()} {...rest}>
      <div className="field-decoration-content-container">
        {label && <label>{label}</label>}

        <div className="field-decoration-content">
          {leading &&
            cloneElement(leading, {
              className: `leading ${leading.props.className || ""}`,
              disabled: disabled || leading.props.disabled
            })}

          {cloneElement(child, { disabled: disabled || child.props.disabled })}

          {trailing &&
            cloneElement(trailing, {
              className: `leading ${trailing.props.className || ""}`,
              disabled: disabled || trailing.props.disabled
            })}
        </div>
      </div>

      {(error || helper) && (
        <div className="field-decoration-footer">
          {error && <div className="error">{error}</div>}
          {helper && <div className="helper">{helper}</div>}
        </div>
      )}
    </FieldDecorationRoot>
  );
};
