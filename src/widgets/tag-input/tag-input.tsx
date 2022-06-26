import "./tag-input.scss";
import React, { useRef } from "react";
import { TagInputProps } from "../../../types";

export const TagInput = ({
  value,
  onChange,
  validator,
  placeholder,
  className: _className,
  onInputError,
  ...rest
}: TagInputProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>();

  const className = (): string => {
    const classes = ["react-simple-widget tag-input"];
    if (_className) classes.push(_className);
    return classes.join(" ");
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (containerRef.current === e.target) {
      inputRef.current.focus();
    }

    if (rest.onClick) rest.onClick(e);
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
    <div {...rest} ref={containerRef} className={className()} onClick={onClick}>
      {value.map((option, i) => (
        <span key={option.toString()} className="option">
          <small className="me-1">{option.toString()}</small>

          <button type="button" className="align-middle" onClick={() => removeValueItem(i)}>
            <i className="fa fa-times small " />
          </button>
        </span>
      ))}

      <input ref={inputRef} type="text" placeholder={placeholder} onKeyDown={onInputKeyDown} tabIndex={0} />
    </div>
  );
};
