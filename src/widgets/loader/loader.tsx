import "./loader.scss";
import React from "react";
import { LoaderProps } from "../../../types";

export const Loader = ({
  className: _className,
  children,
  invert,
  ...rest
}: LoaderProps): any => {
  const className = (): string => {
    const classes = ["react-simple-widget", "loader"];
    if (_className) classes.push(_className);
    if (invert) classes.push("invert");
    return classes.join(" ");
  };

  return (
    <div className={className()} {...rest}>
      <span className="spinner-border spinner-border-sm me-2" />
      {children}
    </div>
  );
};
