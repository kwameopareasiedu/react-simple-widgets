import { AllHTMLAttributes, ButtonHTMLAttributes } from "react";

/** DialogProvider Types */
export interface Dialog {
    id: string;
    widget?: JSX.Element;
    options?: DialogOptions;
    onDismiss?: () => void;
}

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

export interface DialogHelper {
    dismiss: (returnValue?: any) => void;
}

export type DialogBuilder = (helper: DialogHelper) => JSX.Element;

export interface DialogView {
    dialog: Dialog;
}

export interface DialogProviderContext {
    showDialog: (builder: DialogBuilder, options?: DialogOptions) => void;
}

export interface DialogProvider {
    children: any;
}

/** FlashProvider Types */
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

export type FlashViewBuilder = (flash: Flash) => JSX.Element;

export interface FlashView {
    type: FlashType;
    title: string;
    message: string;
    buttonText: string;
    onDismiss: () => void;
}

export interface FlashProviderContext {
    flashError: (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string) => void;
    flashWarning: (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string) => void;
    flashInfo: (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string) => void;
    flashSuccess: (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string) => void;
}

export interface FlashProvider {
    children: any;
    builder?: FlashViewBuilder;
}

/** LocalStorageProvider Types*/
export interface LocalStorageProviderContext {
    getItem: (key: string) => string;
    setItem: (key: string, value: string) => void;
    removeItems: (...keys: Array<string>) => void;
    clear: () => void;
}

export interface LocalStorageProvider {
    children: any;
}

/** PopupMenu */
export interface PopupMenu extends AllHTMLAttributes<HTMLDivElement> {
    children: any;
}

/** TableView */
export enum SortDirection {
    NONE,
    ASC,
    DESC
}

export interface TableViewSortData {
    prop: string;
    direction: SortDirection;
}

export type TableViewCellResolverFunction = (item: any, itemIndex?: number) => any;

export type TableViewCellResolver = string | TableViewCellResolverFunction;

export type TableViewHeaderRowBuilder = (columnValues: Array<string>, sort?: TableViewSortData) => JSX.Element;

export type TableViewBodyRowBuilder = (
    item: any,
    cellResolvers: Array<TableViewCellResolver>,
    itemIndex?: number
) => JSX.Element;

export type TableViewFooterRowBuilder = () => JSX.Element;

export type TableViewCaptionBuilder = () => JSX.Element;

export type TableViewOptionsBuilder = (item: any, itemIndex?: number) => JSX.Element;

export type TableViewSortChangeCallback = (prop: string, direction: SortDirection) => void;

export interface TableView extends AllHTMLAttributes<HTMLTableElement> {
    items: Array<any>;
    props: Array<[string, TableViewCellResolver, string?]>;
    headerRowBuilder?: TableViewHeaderRowBuilder;
    bodyRowBuilder?: TableViewBodyRowBuilder;
    footerRowBuilder?: TableViewFooterRowBuilder;
    captionBuilder?: TableViewCaptionBuilder;
    optionsBuilder?: TableViewOptionsBuilder;
    onSort?: TableViewSortChangeCallback;
}

/** Pagination */
export interface Pagination extends AllHTMLAttributes<HTMLDivElement> {
    page: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

/** BusyButton */
export interface BusyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    busy?: boolean;
}