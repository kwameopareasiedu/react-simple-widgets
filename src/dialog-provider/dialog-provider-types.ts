export enum DialogSize {
    SMALL,
    MEDIUM,
    WIDE,
    FULL
}

export interface DialogOptions {
    size?: DialogSize;
    backgroundDismissible?: boolean;
    onDismissed?: (returnValue?: any) => void;
}

export interface Dialog {
    id: string;
    widget?: any;
    options?: DialogOptions;
    onDismiss?: () => void;
}

export interface DialogHelper {
    dismiss: (returnValue?: any) => void;
}

export type DialogBuilder = (helper: DialogHelper) => any;