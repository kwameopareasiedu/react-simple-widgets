import "./dialog-view.scss";
import React, { useRef } from "react";
import { DialogSize, DialogView as IDialogView } from "../../../types";

/** DialogView, as the name implies, renders a dialog interface */
export const DialogView = ({ dialog }: IDialogView): JSX.Element => {
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

        if (!dialogContent.contains(e.target as Node) && dialog.options.backgroundDismissible) {
            dialog.onDismiss();
        }
    };

    return (
        <div className="react-simple-widget dialog-view" onClick={onBackgroundClick}>
            <div ref={dialogContentRef} className={dialogViewContentClassName()}>
                {dialog.widget}
            </div>
        </div>
    );
};
