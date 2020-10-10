export enum Confirmation {
    DANGER,
    WARNING,
    INFO,
    SUCCESS,
    PRIMARY
}

export interface ConfirmDialog {
    children: any;
    onConfirm: () => void;
    onCancel?: () => void;
    type?: Confirmation;
}
