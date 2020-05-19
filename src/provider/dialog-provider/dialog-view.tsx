import "./dialog-view.scss";
import React from "react";
import { DialogSize, IDialogOptions } from "../../../types";

interface IDialogView {
    dialogHolder: DialogViewHolder;
}

/** DialogView, as the name implies, renders a dialog interface */
export const DialogView = ({ dialogHolder }: IDialogView): any => {
    const dialogViewContentClassName = (): string => {
        const classes = ["dialog-view-content"];
        if ((dialogHolder.options.size || DialogSize.SMALL) === DialogSize.SMALL) classes.push("small-dialog");
        if ((dialogHolder.options.size || DialogSize.SMALL) === DialogSize.MEDIUM) classes.push("medium-dialog");
        if ((dialogHolder.options.size || DialogSize.SMALL) === DialogSize.WIDE) classes.push("wide-dialog");
        return classes.join(" ");
    };

    return (
        <div className="react-simple-widget dialog-view">
            <div className={dialogViewContentClassName()}>{dialogHolder.widget}</div>
        </div>
    );
};

/** DialogViewHolder represents the information needed to render a DialogView */
export class DialogViewHolder {
    static internalId = 0;

    id: number;
    options: IDialogOptions;
    widget: any;

    constructor() {
        this.id = DialogViewHolder.internalId++;
    }

    setup(widget: any, options: IDialogOptions) {
        this.options = options || {};
        this.widget = widget;
    }
}
