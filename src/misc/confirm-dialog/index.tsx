import "./index.scss";
import React, { useContext } from "react";
import { ConfirmDialogTheme, IConfirmDialog, IDialogHelper, IDialogOptions } from "../../../types";
import { DialogProviderContext } from "../../provider/dialog-provider";

/**
 * ConfirmDialog is a widget that shows a confirmation dialog for an action and calls the action
 * when the confirmation button is clicked. ConfirmDialog uses dialogs to display the confirmation
 * prompts messages and thus depends on a DialogProvider ancestor to be available up your component
 * tree.
 */
export const ConfirmDialog = ({ children, theme = ConfirmDialogTheme.PRIMARY, onConfirm, onCancel }: IConfirmDialog): any => {
    const { showDialog } = useContext(DialogProviderContext);
    const [message, triggerButton] = React.Children.toArray(children);

    const interceptOnChoiceMade = (proceed: boolean): void => {
        if (proceed) onConfirm();
        else onCancel && onCancel();
    };

    const triggerConfirmation = (): void => {
        const dialogOptions: IDialogOptions = { onDialogDismissed: interceptOnChoiceMade };
        showDialog(helper => <ConfirmDialogConfirmation helper={helper} message={message} theme={theme} />, dialogOptions);
    };

    return React.cloneElement(triggerButton as any, { onClick: triggerConfirmation });
};

interface IConfirmDialogConfirmation {
    message: any;
    theme: ConfirmDialogTheme;
    helper: IDialogHelper;
}

const ConfirmDialogConfirmation = ({ message, theme, helper }: IConfirmDialogConfirmation): any => {
    const confirmBtnClassname = (): string => {
        const classes = ["btn", "btn-sm", "btn-block"];
        if (theme === ConfirmDialogTheme.ERROR) classes.push("btn-danger");
        if (theme === ConfirmDialogTheme.WARNING) classes.push("btn-warning");
        if (theme === ConfirmDialogTheme.INFO) classes.push("btn-info");
        if (theme === ConfirmDialogTheme.SUCCESS) classes.push("btn-success");
        if (theme === ConfirmDialogTheme.PRIMARY) classes.push("btn-primary");
        return classes.join(" ");
    };

    return (
        <div className="react-simple-widget confirm-dialog-confirmation card">
            <div className="card-body">
                <div className="message-container">{message}</div>

                <button type="button" className={confirmBtnClassname()} onClick={(): void => helper.dismiss(true)}>
                    Confirm action
                </button>

                <button type="button" className="btn btn-light btn-sm btn-block" onClick={(): void => helper.dismiss(false)}>
                    Close dialog
                </button>
            </div>
        </div>
    );
};
