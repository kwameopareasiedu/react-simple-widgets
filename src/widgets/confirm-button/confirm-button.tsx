import React, { useContext } from "react";
import { ConfirmButtonProps } from "../../../types";
import { DialogProviderContext } from "../dialog-provider/dialog-provider";
import { ConfirmButtonDialog } from "./confirm-button-dialog";
import { BusyButton } from "../busy-button/busy-button";
import styled from "styled-components";

const ConfirmButtonRoot = styled(BusyButton).attrs(props => ({
  className: "react-simple-widget confirm-button " + props.className
}))``;

export const ConfirmButton = ({
  message,
  confirmButtonClassName,
  cancelButtonClassName,
  children,
  onConfirm,
  onCancel,
  builder,
  onClick,
  ...rest
}: ConfirmButtonProps): any => {
  const { showDialog } = useContext(DialogProviderContext);

  const confirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    showDialog(
      helper => {
        if (builder) return builder(helper, message);
        return (
          <ConfirmButtonDialog
            helper={helper}
            message={message}
            confirmButtonClassName={confirmButtonClassName}
            cancelButtonClassName={cancelButtonClassName}
          />
        );
      },
      {
        escapeDismissible: true,
        backgroundDismissible: true,
        onDismissed: (proceed: boolean): void => {
          if (proceed) return onConfirm();
          if (onCancel) return onCancel();
        }
      }
    );

    if (onClick) onClick(e);
  };

  return (
    <ConfirmButtonRoot onClick={confirm} {...rest}>
      {children}
    </ConfirmButtonRoot>
  );
};
