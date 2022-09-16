import React from "react";
import { BusyButtonProps } from "../../../types";
import { Loader } from "../loader/loader";
import styled from "styled-components";

const BusyButtonRoot = styled.button.attrs(props => ({
  className: "react-simple-widget busy-button " + props.className
}))`
  .react-simple-widget.loader {
    display: inline;
  }
`;

export const BusyButton = ({
  busy,
  invert,
  disabled,
  children,
  ...rest
}: BusyButtonProps): any => {
  return (
    <BusyButtonRoot disabled={busy || disabled} {...rest}>
      {busy && <Loader role="status" className="me-2" invert={invert} />}
      {children}
    </BusyButtonRoot>
  );
};
