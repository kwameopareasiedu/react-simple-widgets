export interface UseCountdown {
    count: number;
    running: boolean;
    resetCountdown: () => void;
}
export interface UseLoadMore {
    page: number;
    items: Array<any>;
    endOfItems: boolean;
    loadTriggered: number;
    loadMore: (resetBeforeLoad?: boolean) => void;
    onLoadMoreSuccess: (newItems: Array<any>, total: number) => void;
    onLoadMoreFailed: () => void;
}
export interface UseWindowBreakpoints {
    width: number;
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
}
import { ButtonHTMLAttributes } from "react";

export interface BusyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    busy?: boolean;
}
export enum Confirmation {
    DANGER,
    WARNING,
    INFO,
    SUCCESS,
    PRIMARY
}

export interface ConfirmDialog {
    children: any;
    onConfirm: () => void;
    onCancel?: () => void;
    type?: Confirmation;
}

export interface FileField {
    name: string;
    limit?: number;
    label?: string;
    extensions?: Array<string>;
    validator?: (file: File) => string;
    errorTransformer?: (err: any) => string;
    onChange?: (file: File) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    trailing?: any;
    leading?: any;
}

export enum DatePickerMode {
    MULTI,
    MONTH
}

export interface DatePicker {
    label?: string;
    error?: string;
    format?: string;
    mode?: DatePickerMode;
    displayFormat?: string;
    date: string | Array<string>;
    validator?: (date: string) => string;
    onChange: (date: string | Array<string>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecorationProps
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}
import { SelectHTMLAttributes } from "react";

export interface DropdownField extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    children: any;
    label?: string;
    // CustomField props
    errorTransformer?: (err: any) => string;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}
import { InputHTMLAttributes } from "react";

export enum TextFieldMode {
    INPUT,
    EDITOR
}

export interface TextField extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    mode?: TextFieldMode;
    onEditorBlur?: () => void;
    onEditorFocus?: () => void;
    onEditorChange?: (value: any) => void;
    // CustomField props
    errorTransformer?: (err: any) => string;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}

export interface TimePicker {
    time: string;
    label?: string;
    error?: string;
    validator?: (time: string) => string;
    onChange: (time: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}

export interface TimeField {
    name: string;
    label?: string;
    error?: string;
    errorTransformer?: (err: any) => string;
    validator?: (time: string) => string;
    onChange?: (time: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}

export interface DateField {
    name: string;
    label?: string;
    format?: string;
    mode?: DatePickerMode;
    displayFormat?: string;
    validator?: (date: string) => string;
    errorTransformer?: (err: any) => string;
    onChange?: (date: string | Array<string>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    stickyFloatingLabel?: boolean;
    trailing?: any;
    leading?: any;
}
export enum FieldDecorationType {
    UNDERLINE,
    FLOATING_LABEL
}

export interface FieldDecorationBuilderProps {
    onFieldChange: (value: boolean) => void;
    onFieldFocus: () => void;
    onFieldBlur: () => void;
}

export type FieldDecorationBuilder = (hooks: FieldDecorationBuilderProps) => any;

export interface FieldDecoration {
    label?: any;
    error?: any;
    leading?: any;
    trailing?: any;
    disabled?: boolean;
    stickyFloatingLabel?: boolean;
    decoration?: FieldDecorationType;
    children: FieldDecorationBuilder;
}
import { FieldHelperProps, FieldInputProps, FieldMetaProps } from "formik";
import { InputHTMLAttributes } from "react";

export type CustomFieldBuilder = (options: FieldMetaProps<any> & FieldInputProps<any> & FieldHelperProps<any>) => any;

export interface CustomField extends InputHTMLAttributes<HTMLInputElement> {
    errorTransformer?: (err: any) => string;
    children: CustomFieldBuilder;
}

export interface FilePicker {
    file: File;
    error?: string;
    limit?: number;
    label?: string;
    extensions?: Array<string>;
    validator?: (file: File) => string;
    onChange: (file: File) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    // FieldDecoration props
    decoration?: FieldDecorationType;
    trailing?: any;
    leading?: any;
}
export enum SelectFieldMode {
    SINGLE,
    MULTI
}

export interface SelectField {
    name: string;
    label?: string;
    inline?: boolean;
    mode?: SelectFieldMode;
    options?: Array<[string, any]>;
    onChange?: (value: any) => void;
    // CustomField props
    errorTransformer?: (err: any) => string;
}
/* TransitionProvider interfaces */
import { AnchorHTMLAttributes } from "react";

export interface TransitionOptions {
    dontAnimate?: boolean;
    replaceUrl?: boolean;
}

export interface TransitionConfig {
    to: string;
    options: TransitionOptions;
}

export interface TransitionProviderContext {
    __config__: TransitionConfig;
    __incrementViewCount__: () => void;
    __decrementViewCount__: () => void;
    __endRedirect__: () => void;
    redirect: (to: string, config?: TransitionOptions) => void;
}

export interface TransitionProvider {
    children: any;
}

export interface TransitionView {
    children: any;
}

export interface TransitionLink extends TransitionOptions, AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    children?: any;
}

export interface ListViewOption {
    label: any;
    confirmation?: [Confirmation, any];
    onClick: (item: any, itemIndex?: number) => void;
}

export interface ListViewOptions {
    busy?: (item: any, itemIndex?: number) => boolean;
    builder: (item: any, itemIndex?: number) => Array<ListViewOption>;
}

export interface ListViewPagination {
    page: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

export enum ListViewSortOrder {
    NONE,
    ASC,
    DESC
}

export interface ListViewSort {
    columnIndex: number;
    columns: Array<string>;
    order: ListViewSortOrder;
    onSort: (columnIndex: number, order: ListViewSortOrder) => void;
}

export interface ListView {
    busy?: boolean;
    items: Array<any>;
    sort?: ListViewSort;
    condensed?: boolean;
    breakpoint?: number;
    emptyMessage?: string;
    options?: ListViewOptions;
    pagination?: ListViewPagination;
    props: Array<[string, string | ((item: any, itemIndex?: number) => any)]>;
    keyFn: (item: any, itemIndex?: number) => string;
}
export interface ObjectView {
    object: any;
    condensed?: boolean;
    props: Array<[string, string | ((object: any) => any)]>;
    splitRatio?: number;
}
