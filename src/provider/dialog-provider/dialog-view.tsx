import "./dialog-view.scss";
import React, { useRef } from "react";
import { DialogSize, IDialogOptions } from "../../../types";

interface IDialogView {
    dialogHolder: DialogViewHolder;
}

/** DialogView, as the name implies, renders a dialog interface */
export const DialogView = ({ dialogHolder }: IDialogView): any => {
    const dialogContentRef = useRef();

    const dialogViewContentClassName = (): string => {
        const classes = ["dialog-view-content"];
        if ((dialogHolder.options.size || DialogSize.SMALL) === DialogSize.SMALL) classes.push("small-dialog");
        if ((dialogHolder.options.size || DialogSize.SMALL) === DialogSize.MEDIUM) classes.push("medium-dialog");
        if ((dialogHolder.options.size || DialogSize.SMALL) === DialogSize.WIDE) classes.push("wide-dialog");
        return classes.join(" ");
    };

    const onBackgroundClick = (e: React.MouseEvent): void => {
        const dialogContentElement: any = dialogContentRef.current;
        if (!dialogContentElement.contains(e.target) && dialogHolder.options.dismissOnBackgroundClick) dialogHolder.dismiss();
    };

    return (
        <div className="react-simple-widget dialog-view" onClick={onBackgroundClick}>
            <div ref={dialogContentRef} className={dialogViewContentClassName()}>
                {dialogHolder.widget}
            </div>
        </div>
    );
};

/** DialogViewHolder represents the information needed to render a DialogView */
export class DialogViewHolder {
    static internalId = 0;

    id: number;
    widget: any;
    options: IDialogOptions;
    dismiss: () => void;

    constructor() {
        this.id = DialogViewHolder.internalId++;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup(widget: any, dismiss: () => void, options: IDialogOptions): void {
        this.options = options || {};
        this.dismiss = dismiss;
        this.widget = widget;
    }
}
