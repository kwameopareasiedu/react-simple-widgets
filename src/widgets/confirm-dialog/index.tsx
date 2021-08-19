import "./index.scss";
import React, { useContext } from "react";
import { ConfirmDialog as Props, Confirmation } from "./types";
import { DialogProviderContext } from "../../dialog-provider/dialog-provider-context";
import { DialogHelper, DialogOptions } from "../../dialog-provider/dialog-provider-types";

/**
 * ConfirmDialog is a widget that shows a confirmation dialog for an action and calls the action
 * when the confirmation button is clicked. ConfirmDialog uses dialogs to display the confirmation
 * prompts messages and thus depends on a DialogProvider ancestor to be available up your component
 * tree.
 */
export const ConfirmDialog = ({ children, type = Confirmation.PRIMARY, onConfirm, onCancel }: Props): any => {
    const { showDialog } = useContext(DialogProviderContext);
    const [message, triggerButton] = React.Children.toArray(children);

    const interceptOnChoiceMade = (proceed: boolean): void => {
        if (proceed) onConfirm();
        else onCancel && onCancel();
    };

    const triggerConfirmation = (): void => {
        const dialogOptions: DialogOptions = { onDismissed: interceptOnChoiceMade };
        showDialog(
            helper => <ConfirmDialogConfirmation helper={helper} message={message} type={type} />,
            dialogOptions
        );
    };

    return React.cloneElement(triggerButton as any, { onClick: triggerConfirmation });
};

interface IConfirmDialogConfirmation {
    message: any;
    type: Confirmation;
    helper: DialogHelper;
}

const ConfirmDialogConfirmation = ({ message, type, helper }: IConfirmDialogConfirmation): any => {
    const confirmBtnClassname = (): string => {
        const classes = ["btn", "btn-sm", "btn-block"];
        if (type === Confirmation.DANGER) classes.push("btn-danger");
        if (type === Confirmation.WARNING) classes.push("btn-warning");
        if (type === Confirmation.INFO) classes.push("btn-info");
        if (type === Confirmation.SUCCESS) classes.push("btn-success");
        if (type === Confirmation.PRIMARY) classes.push("btn-primary");
        return classes.join(" ");
    };

    return (
        <div className="react-simple-widget confirm-dialog-confirmation card">
            <div className="card-body">
                <div className="message-container">{message}</div>

                <button type="button" className={confirmBtnClassname()} onClick={(): void => helper.dismiss(true)}>
                    Confirm action
                </button>

                <button
                    type="button"
                    className="btn btn-light btn-sm btn-block"
                    onClick={(): void => helper.dismiss(false)}>
                    Close dialog
                </button>
            </div>
        </div>
    );
};
