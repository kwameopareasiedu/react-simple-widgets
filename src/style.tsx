import React from "react";
import { Global, css } from "@emotion/react";

const globalStyle = css`
  body {
    --rsw-primary-color: #402897;
    --rsw-primary-color-light: #40289722;
    --rsw-secondary-color: #b3b3b3;
    --rsw-label-color: #777777;
    --rsw-error-color: #ff5555;
    --rsw-transition-duration: 0.15s;

    /* FlashProvider vars */
    --rsw-flash-view-default-theme-color: #e3e3e3;
    --rsw-flash-view-error-theme-color: #ff5555;
    --rsw-flash-view-warning-theme-color: #ffdd55;
    --rsw-flash-view-info-theme-color: #55ddff;
    --rsw-flash-view-success-theme-color: #6cd924;

    /* PopupMenu vars */
    --rsw-popup-menu-scrim-bg-color: #00000004;
  }
`;

export const RSWGlobalStyle = (): JSX.Element => {
  return <Global styles={globalStyle} />;
};
