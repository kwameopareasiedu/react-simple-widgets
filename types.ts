import { AnchorHTMLAttributes } from "react";

/* DialogProvider interfaces */
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

/* ValueStoreProvider interfaces */
export type IValueStoreUpdater = (currentValue: any) => any;

export interface IValueStoreProviderContext {
    get: (key: string) => any;
    store: (key: string, value: any, storeInLocalStorage?: boolean) => void;
    update: (key: string, update: IValueStoreUpdater, storeInLocalStorageIfNotExists?: boolean) => void;
}

export interface IValueStoreProvider {
    children: any;
    initialLocalStorageKeys?: Array<string>;
}

/* FlashProvider interfaces */
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

/* PageTransitionProvider interfaces */
export interface IPageTransitionProviderConfig {
    path: string;
    animate: boolean;
    replace: boolean;
}

export interface IPageTransitionOptions {
    dontAnimate?: boolean;
    replaceUrl?: boolean;
}

export interface IPageTransitionProviderContext {
    __finishRedirect: () => void;
    __incrementPageTransitionsInScope: () => void;
    __decrementPageTransitionsInScope: () => void;
    __config: IPageTransitionProviderConfig;
    redirect: (to: string, config?: IPageTransitionOptions) => void;
}

export interface IPageTransitionProvider {
    children: any;
}

export interface IPageTransitionView {
    children: any;
}

export interface IPageTransitionLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    children?: any;
    dontAnimate?: boolean;
    replaceUrl?: boolean;
}
