export enum DialogSize {
    SMALL,
    MEDIUM,
    WIDE
}

export interface IDialogOptions {
    size?: DialogSize;
    onDialogDismissed?: (returnValue: any) => void;
}

export interface IDialogHelper {
    dismiss: (returnValue?: any) => void;
}

export interface IDialogProviderContext {
    showDialog: (dialogBuilder: (helper: IDialogHelper) => any, options?: IDialogOptions) => void;
}

export interface IDialogProvider {
    children: any;
}