import { AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { FieldHelperProps, FieldInputProps, FieldMetaProps } from "formik";

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
    put: (key: string, value: any, storeInLocalStorage?: boolean) => void;
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

/* CustomField */
export type ICustomFieldBuilder = (options: FieldMetaProps<any> & FieldInputProps<any> & FieldHelperProps<any>) => any;

export interface ICustomField extends InputHTMLAttributes<HTMLInputElement> {
    children: ICustomFieldBuilder;
    errorTransformer?: (err: any) => string;
}

/* FieldDecoration */
export interface IFieldDecorationBuilderProps {
    onFieldFocus: () => void;
    onFieldBlur: () => void;
}

export type IFieldDecorationBuilder = ({ onFieldFocus, onFieldBlur }: IFieldDecorationBuilderProps) => any;

export enum FieldDecorationType {
    NONE,
    FLAT,
    UNDERLINE,
    FLOATING_LABEL
}

export interface IFieldDecoration {
    label?: string;
    error?: string;
    hasValue?: boolean;
    decoration?: FieldDecorationType;
    children: IFieldDecorationBuilder;
}

/* TextField */
export enum TextFieldMode {
    INPUT,
    EDITOR
}

export interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    mode?: TextFieldMode;
    decoration?: FieldDecorationType;
    errorTransformer?: (err: any) => string;
    onEditorChange?: (value: any) => void;
    onEditorFocus?: () => void;
    onEditorBlur?: () => void;
}

/* DropdownField */
export interface IDropdownField extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label?: string;
    decoration?: FieldDecorationType;
    errorTransformer?: (err: any) => string;
    children: any;
}

/* SelectField */
export enum SelectFieldMode {
    BINARY,
    SINGLE,
    MULTI
}

export interface ISelectField {
    name: string;
    label?: string;
    inline?: boolean;
    mode: SelectFieldMode;
    options?: Array<[string, string]>;
    errorTransformer?: (err: any) => string;
    onChange?: (value: Array<string> | string | boolean) => void;
}

/* FilePicker */
export interface IFilePicker {
    file: File;
    error?: string;
    limit?: number;
    label?: string;
    extensions?: Array<string>;
    decoration?: FieldDecorationType;
    validator?: (file: File) => string;
    onChange: (file: File) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

/* FileField */
export interface IFileField {
    name: string;
    limit?: number;
    label?: string;
    extensions?: Array<string>;
    decoration?: FieldDecorationType;
    validator?: (file: File) => string;
    errorTransformer?: (err: any) => string;
    onChange?: (file: File) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

/* DatePicker */
export enum DatePickerMode {
    SINGLE,
    MULTI,
    MONTH
}

export interface IDatePicker {
    label?: string;
    error?: string;
    format?: string;
    mode?: DatePickerMode;
    displayFormat?: string;
    date: string | Array<string>;
    decoration?: FieldDecorationType;
    validator?: (date: string) => string;
    onChange: (date: string | Array<string>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

/* DateField */
export interface IDateField {
    name: string;
    label?: string;
    error?: string;
    format?: string;
    mode?: DatePickerMode;
    displayFormat?: string;
    decoration?: FieldDecorationType;
    validator?: (date: string) => string;
    errorTransformer?: (err: any) => string;
    onChange?: (date: string | Array<string>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

/* ListView */
export enum ListViewSortOrder {
    NONE,
    ASC,
    DESC
}

export interface IListView {
    busy: boolean;
    page: number;
    total: number;
    pageSize: number;
    items: Array<any>;
    breakpoint?: number;
    sort?: [string, ListViewSortOrder];
    options?: Array<[string, (item: any, optionIndex: number) => void]>;
    props: Array<[string, string | ((item: any, itemIndex?: number) => any)]>;
    onSort?: (prop: string, order: ListViewSortOrder) => void;
    onOptionsClick?: (item: any, itemIndex?: number) => void;
    onPageChange: (page: number) => void;
    skipIf?: (item: any) => boolean;
}

/* ObjectView */
export interface IObjectView {
    object: any;
    props: Array<[string, string | ((object: any) => any)]>;
    splitRatio?: number;
}
