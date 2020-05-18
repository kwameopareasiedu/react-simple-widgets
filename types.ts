export enum DialogSize {
    SMALL,
    MEDIUM,
    WIDE
}

export interface IDialogOptions {
    size?: DialogSize;
    onDialogDismissed?: (returnValue?: any) => void;
}

export interface IDialogHelper {
    dismiss: (returnValue?: any) => void;
}

export type IDialogBuilder = (helper: IDialogHelper) => any;

export interface IDialogProviderContext {
    showDialog: (dialogBuilder: IDialogBuilder, options?: IDialogOptions) => void;
}

export interface IDialogProvider {
    children: any;
}

export interface ILocalStorageProviderContext {
    store: any;
    put: (key: string, value: any, keepInMemoryOnly?: boolean) => void;
}

export interface ILocalStorageProvider {
    children: any;
    initialKeys?: Array<string>;
}

export enum FlashType {
    ERROR,
    WARNING,
    INFO,
    SUCCESS
}

export interface IFlashProviderContext {
    flashError: (title: string, message: string, onFlashDismissed?: () => void) => void;
    flashWarning: (title: string, message: string, onFlashDismissed?: () => void) => void;
    flashInfo: (title: string, message: string, onFlashDismissed?: () => void) => void;
    flashSuccess: (title: string, message: string, onFlashDismissed?: () => void) => void;
}

export interface IFlashProvider {
    children: any;
}
