import { DialogOptions } from "./types";

// Represents the information needed to render a DialogView
export class DialogData {
    static internalId = 0;

    // The unique ID for the dialog
    id: number;
    // The widget to display in the dialog
    widget: any;
    // The options to pass to the dialog when rendered
    options: DialogOptions;
    // Invoked when any of the dialog dismiss strategies is used
    dismiss: () => void;

    constructor() {
        this.id = DialogData.internalId++;
    }

    setup(widget: any, dismiss: () => void, options?: DialogOptions): void {
        this.options = options || {};
        this.dismiss = dismiss;
        this.widget = widget;
    }
}
