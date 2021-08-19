export enum FlashType {
    ERROR,
    WARNING,
    INFO,
    SUCCESS
}

export interface Flash {
    type: FlashType;
    title: string;
    message: any;
    onFlashDismissed?: () => void;
    btnText?: string;
}

export type FlashViewBuilder = (flash: Flash) => any;
