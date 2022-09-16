import React, { useRef } from "react";
import { DialogSize, DialogViewProps } from "../../../types";
import styled from "styled-components";

const DialogViewRoot = styled.div.attrs(props => ({
  className: "react-simple-widget dialog-view " + props.className
}))`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000099;
  overflow: auto;

  .dialog-view-content {
    width: 100%;
    margin: auto;
    padding: 15px;
  }

  .dialog-view-content.small-dialog {
    @media screen and (min-width: 576px) {
      max-width: 360px;
    }
  }

  .dialog-view-content.medium-dialog {
    @media screen and (min-width: 768px) {
      max-width: 480px;
    }
  }

  .dialog-view-content.wide-dialog {
    @media screen and (min-width: 992px) {
      max-width: 640px;
    }
  }

  .dialog-view-content.full-dialog {
    max-width: 100%;
  }
`;

/** DialogView, as the name implies, renders a dialog interface */
export const DialogView = ({ dialog }: DialogViewProps): JSX.Element => {
  const dialogContentRef = useRef<HTMLDivElement>();

  const dialogViewContentClassName = (): string => {
    const classes = ["dialog-view-content"];

    switch (dialog.options.size) {
      case DialogSize.FULL:
        classes.push("full-dialog");
        break;
      case DialogSize.WIDE:
        classes.push("wide-dialog");
        break;
      case DialogSize.MEDIUM:
        classes.push("medium-dialog");
        break;
      case DialogSize.SMALL:
      default:
        classes.push("small-dialog");
        break;
    }

    return classes.join(" ");
  };

  const onBackgroundClick = (e: React.MouseEvent): void => {
    const dialogContent: HTMLDivElement = dialogContentRef.current;

    if (
      !dialogContent.contains(e.target as Node) &&
      dialog.options.backgroundDismissible
    ) {
      dialog.onDismiss();
    }
  };

  return (
    <DialogViewRoot onClick={onBackgroundClick}>
      <div ref={dialogContentRef} className={dialogViewContentClassName()}>
        {dialog.widget}
      </div>
    </DialogViewRoot>
  );
};
