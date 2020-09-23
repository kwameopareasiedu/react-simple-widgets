export enum DialogSize {
    SMALL,
    MEDIUM,
    WIDE
}

export interface DialogOptions {
    size?: DialogSize;
    dismissible?: boolean;
    onDismissed?: (returnValue?: any) => void;
}

export interface DialogHelper {
    dismiss: (returnValue?: any) => void;
}

export type DialogBuilder = (helper: DialogHelper) => any;

export type DialogEscapeCallback = (e: KeyboardEvent) => void;

export interface DialogProviderContext {
    showDialog: (builder: DialogBuilder, options?: DialogOptions) => void;
}

export interface DialogProvider {
    children: any;
}
