import React, { useRef } from "react";
import { TagInputProps } from "../../../types";
import styled from "styled-components";

const TagInputRoot = styled.div.attrs(props => ({
  className: "react-simple-widget tag-input " + props.className
}))`
  display: inline-flex;
  flex-wrap: wrap;

  &:hover {
    cursor: text;
  }

  .option {
    padding: 2px 6px;
    margin: 0 2px 2px 0;
    background-color: #f3f3f3;

    button {
      padding: 0;
      background: none;
      outline: none;
      border: none;
    }
  }

  .option:last-child {
    margin-right: 6px;
  }

  input,
  input:focus,
  input:hover {
    border: none;
    outline: none;
    box-shadow: none;
  }

  input {
    width: 0;
    flex-grow: 1;
  }
`;

export const TagInput = ({
  value,
  onChange,
  validator,
  placeholder,
  onInputError,
  onClick: _onClick,
  ...rest
}: TagInputProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>();

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (containerRef.current === e.target) {
      inputRef.current.focus();
    }

    if (_onClick) _onClick(e);
  };

  const onInputKeyDown = (e: React.KeyboardEvent): void => {
    const inputValue = inputRef.current.value.trim();

    if (["Enter", "Tab"].includes(e.key)) {
      addValueItem(inputValue);

      if (e.key !== "Tab" || inputValue) {
        e.preventDefault();
      }
    } else if (e.key === "Backspace") {
      if (!inputValue) {
        removeValueItem(value.length - 1);
      }
    }
  };

  const addValueItem = (item: string): void => {
    if (item && !value.includes(item)) {
      if (validator) {
        const err = validator(item);
        if (!err) {
          onChange([...value, item]);
          inputRef.current.value = "";
        } else if (onInputError) onInputError(err);
      } else {
        onChange([...value, item]);
        inputRef.current.value = "";
      }
    }
  };

  const removeValueItem = (idx: number): void => {
    onChange(value.filter((_, i) => i !== idx));
    inputRef.current.focus();
  };

  return (
    <TagInputRoot {...rest} ref={containerRef} onClick={onClick}>
      {value.map((option, i) => (
        <span key={option.toString()} className="option">
          <small className="me-1">{option.toString()}</small>

          <button
            type="button"
            className="align-middle"
            onClick={() => removeValueItem(i)}>
            <i className="fa fa-times small " />
          </button>
        </span>
      ))}

      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onKeyDown={onInputKeyDown}
        tabIndex={0}
      />
    </TagInputRoot>
  );
};
