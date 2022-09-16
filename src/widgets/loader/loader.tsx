import React from "react";
import { LoaderProps } from "../../../types";
import styled from "styled-components";

const LoaderRoot = styled.div.attrs((props: LoaderProps) => ({
  className: "react-simple-widget loader " + props.className,
  invert: props.invert || false
}))`
  .spinner-border {
    color: ${props => (props.invert ? "white" : "initial")};
    vertical-align: sub;
  }
`;

export const Loader = ({ children, invert, ...rest }: LoaderProps): any => {
  return (
    <LoaderRoot {...rest} invert={invert}>
      <span
        className={`spinner-border spinner-border-sm ${children ? "me-2" : ""}`}
      />
      {children}
    </LoaderRoot>
  );
};
