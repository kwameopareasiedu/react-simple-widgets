export enum FlashType {
    ERROR,
    WARNING,
    INFO,
    SUCCESS
}

export interface FlashProviderContext {
    flashError: (title: string, message?: any, onFlashDismissed?: () => void) => void;
    flashWarning: (title: string, message?: any, onFlashDismissed?: () => void) => void;
    flashInfo: (title: string, message?: any, onFlashDismissed?: () => void) => void;
    flashSuccess: (title: string, message?: any, onFlashDismissed?: () => void) => void;
}

export interface FlashProvider {
    children: any;
}
