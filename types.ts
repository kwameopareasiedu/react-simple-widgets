export enum DialogSize {
    SMALL,
    MEDIUM,
    WIDE
}

export interface IDialogOptions {
    size?: DialogSize;
}

export interface IDialogHelper {
    dismiss: () => void;
}

export interface IDialogProviderContext {
    showDialog: (dialogBuilder: (helper: IDialogHelper) => any, options?: IDialogOptions) => void;
}
