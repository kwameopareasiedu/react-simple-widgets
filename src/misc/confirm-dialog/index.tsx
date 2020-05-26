import "./index.scss";
import React, { useContext } from "react";
import { IConfirmDialog, IDialogHelper, IDialogOptions } from "../../../types";
import { DialogProviderContext } from "../../provider/dialog-provider";

/**
 * ConfirmDialog is a widget that shows a confirmation dialog for an action and calls the action
 * when the confirmation button is clicked. ConfirmDialog uses dialogs to display the confirmation
 * prompts messages and thus depends on a DialogProvider ancestor to be available up your component
 * tree.
 */
export const ConfirmDialog = ({ children, onConfirm, onCancel }: IConfirmDialog): any => {
    const { showDialog } = useContext(DialogProviderContext);
    const [message, triggerButton] = React.Children.toArray(children);

    const interceptOnChoiceMade = (proceed: boolean): void => {
        if (proceed) onConfirm();
        else onCancel();
    };

    const triggerConfirmation = (): void => {
        const dialogOptions: IDialogOptions = { onDialogDismissed: interceptOnChoiceMade };
        showDialog(helper => <ConfirmDialogConfirmation message={message} helper={helper} />, dialogOptions);
    };

    return React.cloneElement(triggerButton as any, { onClick: triggerConfirmation });
};

interface IConfirmDialogConfirmation {
    message: any;
    helper: IDialogHelper;
}

const ConfirmDialogConfirmation = ({ message, helper }: IConfirmDialogConfirmation): any => {
    return (
        <div className="react-simple-widget confirm-dialog-confirmation card">
            <div className="card-body">
                <div className="message-container">{message}</div>

                <button type="button" className="btn btn-primary btn-sm btn-block" onClick={(): void => helper.dismiss(true)}>
                    Confirm action
                </button>
                <button type="button" className="btn btn-light btn-sm btn-block" onClick={(): void => helper.dismiss(false)}>
                    Close dialog
                </button>
            </div>
        </div>
    );
};
