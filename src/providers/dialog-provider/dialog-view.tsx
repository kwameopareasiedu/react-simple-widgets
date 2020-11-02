import "./dialog-view.scss";
import React, { useRef } from "react";
import { DialogData } from "./dialog-data";
import { DialogSize } from "./types";

interface IDialogView {
    data: DialogData;
}

/** DialogView, as the name implies, renders a dialog interface */
export const DialogView = ({ data }: IDialogView): any => {
    const dialogContentRef = useRef();

    const dialogViewContentClassName = (): string => {
        const classes = ["dialog-view-content"];

        switch (data.options.size) {
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
        const dialogContentElement: any = dialogContentRef.current;
        if (!dialogContentElement.contains(e.target) && !data.options.persistent && data.options.dismissible)
            data.dismiss();
    };

    return (
        <div className="react-simple-widget dialog-view" onClick={onBackgroundClick}>
            <div ref={dialogContentRef} className={dialogViewContentClassName()}>
                {data.widget}
            </div>
        </div>
    );
};
