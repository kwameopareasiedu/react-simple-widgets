import { AllHTMLAttributes, AnchorHTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { FieldHelperProps, FieldInputProps, FieldMetaProps } from "formik";

/* PageTransitionProvider interfaces */
export interface IPageTransitionOptions {
    dontAnimate?: boolean;
    replaceUrl?: boolean;
}

export interface IPageTransitionConfig {
    to: string;
    options: IPageTransitionOptions;
}

export interface IPageTransitionProviderContext {
    __internal_config: IPageTransitionConfig;
    __internal_incrementPageTransitionViewCount: () => void;
    __internal_decrementPageTransitionViewCount: () => void;
    __internal_endRedirect: () => void;
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
    leading?: any;
    trailing?: any;
    hasValue?: boolean;
    disabled?: boolean;
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
    children: any;
    label?: string;
    decoration?: FieldDecorationType;
    errorTransformer?: (err: any) => string;
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
    options?: Array<[string, any]>;
    errorTransformer?: (err: any) => string;
    onChange?: (value: any) => void;
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

export interface IListViewPagination {
    page: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

export interface IListViewSort {
    column: string;
    order: ListViewSortOrder;
    onSort: (column: string, order: ListViewSortOrder) => void;
}

export interface IListViewOptionItem {
    label: any;
    confirmation?: any;
    confirmationTheme?: ConfirmDialogTheme;
    onClick: (item: any, itemIndex?: number) => void;
}

export interface IListViewOptions {
    busy?: (item: any, itemIndex?: number) => boolean;
    builder: (item: any, itemIndex?: number) => Array<IListViewOptionItem>;
}

export interface IListView {
    busy?: boolean;
    items: Array<any>;
    breakpoint?: number;
    sort?: IListViewSort;
    options?: IListViewOptions;
    pagination?: IListViewPagination;
    props: Array<[string, string | ((item: any, itemIndex?: number) => any)]>;
    onClick?: (item: any, itemIndex?: number) => void;
    skipIf?: (item: any) => boolean;
}

/* ObjectView */
export interface IObjectView {
    object: any;
    props: Array<[string, string | ((object: any) => any)]>;
    splitRatio?: number;
}

/* ConfirmDialog */
export enum ConfirmDialogTheme {
    DANGER,
    WARNING,
    INFO,
    SUCCESS,
    PRIMARY
}

export interface IConfirmDialog {
    children: any;
    onConfirm: () => void;
    onCancel?: () => void;
    theme?: ConfirmDialogTheme;
}

/* BusyButton */
export interface IBusyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    busy?: boolean;
}

/* Breadcrumbs */
export interface IBreadcrumbs extends AllHTMLAttributes<HTMLDivElement> {}

/* Loader */
export interface ILoader extends AllHTMLAttributes<HTMLSpanElement> {}

/* UseLoadMore */
export interface IUseLoadMore {
    page: number;
    items: Array<any>;
    canLoadMore: boolean;
    shouldLoadMore: number;
    onLoadMore: (resetBeforeLoad?: boolean) => void;
    onLoadMoreSuccess: (newItems: Array<any>, total: number) => void;
    onLoadMoreFailed: () => void;
}

/* PageActions */
export interface IPageActions extends AllHTMLAttributes<HTMLDivElement> {}

/* UseTimeout */
export interface IUseCountdown {
    running: boolean;
    countdown: number;
    resetCountdown: () => void;
}

/* UseWindowBreakpoints */
export interface IUseWindowBreakpoints {
    width: number;
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
}

/* TimePicker */
export interface ITimePicker {
    time: string;
    label?: string;
    error?: string;
    decoration?: FieldDecorationType;
    validator?: (time: string) => string;
    onChange: (time: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

/* TimeField */
export interface ITimeField {
    name: string;
    label?: string;
    error?: string;
    decoration?: FieldDecorationType;
    errorTransformer?: (err: any) => string;
    validator?: (time: string) => string;
    onChange?: (time: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
