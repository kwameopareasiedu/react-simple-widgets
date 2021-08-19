import { createContext } from "react";

export interface FlashProviderContext {
    flashError: (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string) => void;
    flashWarning: (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string) => void;
    flashInfo: (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string) => void;
    flashSuccess: (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string) => void;
}

export const FlashProviderContext = createContext<FlashProviderContext>(null);
