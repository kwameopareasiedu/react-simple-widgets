import React from "react";
import { BreadcrumbsProps } from "../../../types";
import styled from "styled-components";

const BreadcrumbsRoot = styled.div.attrs(props => ({
  className: "react-simple-widget breadcrumbs " + props.className
}))`
  > * {
    position: relative;
    display: inline;
    margin-right: 8px;
    font-style: italic;
    color: var(--rsw-secondary-color);
    transition: color var(--rsw-transition-duration);
    text-decoration: none;
  }

  > *:hover {
    color: var(--rsw-primary-color);
  }

  > *::after {
    margin-left: 8px;
    font-size: 85%;
    content: ">";
    vertical-align: text-bottom;
  }

  > *:last-child {
    margin-right: 0;
    color: var(--rsw-primary-color);
  }

  > *:last-child::after {
    content: "";
  }
`;

export const Breadcrumbs = ({ children, ...rest }: BreadcrumbsProps) => {
  return <BreadcrumbsRoot {...rest}>{children}</BreadcrumbsRoot>;
};
