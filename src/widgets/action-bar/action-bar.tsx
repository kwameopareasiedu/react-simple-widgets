import React, { Children } from "react";
import { ActionBarProps } from "../../../types";
import styled from "styled-components";

const ActionBarRoot = styled.div.attrs(props => ({
  className: "react-simple-widget action-bar " + props.className
}))`
  > * {
    margin-right: 8px;
  }

  > :last-child {
    margin-right: 0;
  }
`;

export const ActionBar = ({ children, ...rest }: ActionBarProps): any => {
  if (Children.toArray(children).length === 0) return null;
  return <ActionBarRoot {...rest}>{children}</ActionBarRoot>;
};
