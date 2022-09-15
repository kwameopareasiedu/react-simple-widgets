import React, { useContext } from "react";
import { ConfirmButtonProps } from "../../../types";
import { DialogProviderContext } from "../dialog-provider/dialog-provider";
import { ConfirmButtonDialog } from "./confirm-button-dialog";
import { BusyButton } from "../busy-button/busy-button";

export const ConfirmButton = ({
  busy,
  message,
  confirmButtonClassName,
  cancelButtonClassName,
  children,
  onConfirm,
  onCancel,
  builder,
  className,
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
    <BusyButton busy={busy} className={className} onClick={confirm} {...rest}>
      {children}
    </BusyButton>
  );
};
