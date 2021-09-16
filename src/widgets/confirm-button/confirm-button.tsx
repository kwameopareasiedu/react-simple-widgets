import React, { useContext } from "react";
import { ConfirmButton as IConfirmButton } from "../../../types";
import { DialogProviderContext } from "../dialog-provider/dialog-provider-context";
import { ConfirmButtonDialog } from "./confirm-button-dialog";
import { BusyButton } from "../busy-button/busy-button";

export const ConfirmButton = ({
    busy,
    message,
    children,
    onConfirm,
    onCancel,
    builder,
    className,
    onClick: _onClick,
    ...rest
}: IConfirmButton): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const confirm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        showDialog(
            helper => {
                if (builder) return builder(helper, message);
                return <ConfirmButtonDialog helper={helper} message={message} confirmButtonClassName={className} />;
            },
            {
                backgroundDismissible: true,
                onDismissed: (proceed: boolean): void => {
                    if (proceed) return onConfirm();
                    if (onCancel) return onCancel();
                }
            }
        );

        if (_onClick) _onClick(e);
    };

    return (
        <BusyButton busy={busy} className={className} onClick={confirm} {...rest}>
            {children}
        </BusyButton>
    );
};
