import { AllHTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { FieldHelperProps, FieldInputProps, FieldMetaProps } from "formik";

/** DialogProvider */
export interface Dialog {
  id: string;
  widget?: JSX.Element;
  options?: DialogOptions;
  onDismiss?: () => void;
}

export interface DialogOptions {
  size?: DialogSize;
  escapeDismissible?: boolean;
  backgroundDismissible?: boolean;
  onDismissed?: (returnValue?: any) => void;
}

export enum DialogSize {
  SMALL,
  MEDIUM,
  WIDE,
  FULL
}

export interface DialogHelper {
  dismiss: (returnValue?: any) => void;
}

export type DialogBuilder = (helper: DialogHelper) => JSX.Element;

export interface DialogViewProps {
  dialog: Dialog;
}

export interface DialogProviderContext {
  showDialog: (builder: DialogBuilder, options?: DialogOptions) => void;
}

export interface DialogProviderProps {
  children: any;
}

/** FlashProvider */
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
  btnText?: string;
  closeTimerMs?: number;
  onFlashDismissed?: () => void;
}

export interface FlashOptionalArgs {
  btnText?: string;
  closeTimerMs?: number;
}

export type FlashFunction = (
  title: string,
  message?: any,
  onFlashDismissed?: () => void,
  optionalArgs?: FlashOptionalArgs
) => void;

export type FlashViewBuilder = (flash: Flash) => JSX.Element;

export interface FlashView {
  type: FlashType;
  title: string;
  message: string;
  buttonText: string;
  closeTimerMs?: number;
  onDismiss: () => void;
}

export interface FlashProviderContext {
  flashError: FlashFunction;
  flashWarning: FlashFunction;
  flashInfo: FlashFunction;
  flashSuccess: FlashFunction;
}

export interface FlashProvider {
  children: any;
  builder?: FlashViewBuilder;
}

/** LocalStorageProvider */
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
export type PopupMenuFunctionChild = (closePopup: () => void) => any;

export type PopupMenuChild = string | JSX.Element | PopupMenuFunctionChild;

export interface PopupMenu {
  children: PopupMenuChild | Array<PopupMenuChild>;
}

/** TableView */
export enum SortDirection {
  NONE = 0,
  ASC = 1,
  DESC = -1
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
export interface Pagination extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  page: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
}

/** BusyButton */
export interface BusyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  busy?: boolean;
  invert?: boolean;
}

/** Loader */
export interface Loader extends AllHTMLAttributes<HTMLDivElement> {
  children?: any;
  invert?: boolean;
}

/** ConfirmButton */
export interface ConfirmButtonDialogProps {
  message: any;
  confirmButtonClassName: string;
  helper: DialogHelper;
}

export type ConfirmButtonDialogBuilder = (helper: DialogHelper, message: any) => JSX.Element;

export interface ConfirmButtonProps extends BusyButtonProps {
  message?: any;
  busy?: boolean;
  builder?: ConfirmButtonDialogBuilder;
  onCancel?: () => void;
  onConfirm: () => void;
}

/** Breadcrumbs */
export interface BreadcrumbsProps extends AllHTMLAttributes<HTMLDivElement> {
  children?: any;
}

/** ActionBar */
export interface ActionBarProps extends AllHTMLAttributes<HTMLDivElement> {
  children?: any;
}

/** ObjectView */
export type ObjectViewCellResolverFunction = (item: any) => any;

export type ObjectViewCellResolver = string | ObjectViewCellResolverFunction;

export interface ObjectView extends AllHTMLAttributes<HTMLTableElement> {
  object: any;
  props: Array<[string, ObjectViewCellResolver]>;
  split?: number;
}

/** CustomField */
export type CustomFieldBuilder = (options: FieldMetaProps<any> & FieldInputProps<any> & FieldHelperProps<any>) => any;

export type CustomFieldErrorBuilder = (originalError: any) => string;

export interface CustomFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "children"> {
  errorBuilder?: CustomFieldErrorBuilder;
  children: CustomFieldBuilder;
}

/** FieldDecoration */
export interface FieldDecorationBuilderProps {
  onFieldFocus: () => void;
  onFieldBlur: () => void;
}

export type FieldDecorationBuilder = (hooks: FieldDecorationBuilderProps) => JSX.Element;

export interface FieldDecoration extends Omit<AllHTMLAttributes<HTMLDivElement>, "children"> {
  label?: any;
  error?: any;
  helper?: any;
  disabled?: boolean;
  leading?: JSX.Element;
  trailing?: JSX.Element;
  children: FieldDecorationBuilder;
}

/** TextField */
export interface TextField
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">,
    Pick<FieldDecoration, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (value: string) => void;
}

/** TextEditorField */
export interface TextEditorField extends Pick<FieldDecoration, "label" | "helper"> {
  name: string;
  disabled?: boolean;
  onChange?: (data: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

/** TextAreaField */
export interface TextAreaField
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "onChange">,
    Pick<FieldDecoration, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (value: string) => void;
}

/** PasswordField */
export type PasswordField = Omit<TextField, "trailing" | "type">;

/** DropdownField */
export interface DropdownField
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange">,
    Pick<FieldDecoration, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (value: string) => void;
}

/** CheckboxField */
export interface CheckboxFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">,
    Pick<FieldDecoration, "label"> {
  onChange?: (checked: boolean) => void;
}

/** SelectField */
export interface SelectOption extends AllHTMLAttributes<HTMLInputElement> {
  label: string;
  multi?: boolean;
  selected?: boolean;
  onFocus?: () => void;
  onSelect: () => void;
}

export interface SelectField
  extends Omit<AllHTMLAttributes<HTMLDivElement>, "label" | "onChange">,
    Pick<FieldDecoration, "label"> {
  name: string;
  label?: string;
  inline?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  options: Array<[any, any]>;
  onChange?: (value: any) => void;
}

/** MultiSelectField */
export interface MultiSelectField
  extends Omit<AllHTMLAttributes<HTMLDivElement>, "label" | "onChange">,
    Pick<FieldDecoration, "label"> {
  name: string;
  label?: string;
  inline?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  options: Array<[any, any]>;
  onChange?: (value: Array<any>) => void;
}

/** InfiniteList */
export interface InfiniteList extends AllHTMLAttributes<HTMLDivElement> {
  busy: boolean;
  total: number;
  count: number;
  error?: boolean;
  onLoadMore: () => void;
}

/** Calendar */
export interface CalendarProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  initialDate: string;
  isDateOutlined?: (year: number, month: number, day: number) => boolean;
  isDateActive?: (year: number, month: number, day: number) => boolean;
  validator?: (date: string) => string;
  onChange: (date: string) => void;
}

/** DatePicker */
export interface DatePickerProps extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  displayFormat?: string;
  validator?: (date: string) => string;
  onChange: (date: string) => void;
}

/** DateField */
export interface DateFieldProps
  extends Omit<DatePickerProps, "label" | "value" | "onChange">,
    Pick<FieldDecoration, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (date: string) => void;
}

/** MultiDatePicker */
export interface MultiDatePicker extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  value: Array<string>;
  displayFormat?: string;
  validator?: (date: string) => string;
  onChange: (dates: Array<string>) => void;
}

/** MultiDateField */
export interface MultiDateField
  extends Omit<MultiDatePicker, "label" | "value" | "onChange">,
    Pick<FieldDecoration, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (dates: Array<string>) => void;
}

/** MonthDatePicker */
export interface MonthDatePicker extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  validator?: (date: string) => string;
  onChange: (date: string) => void;
}

/** MonthDateField */
export interface MonthDateField
  extends Omit<MonthDatePicker, "label" | "value" | "onChange">,
    Pick<FieldDecoration, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (date: string) => void;
}

/** TimePicker */
export interface TimePicker extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (time: string) => void;
}

/** TimeField */
export interface TimeField
  extends Omit<TimePicker, "label" | "value" | "onChange">,
    Pick<FieldDecoration, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (time: string) => void;
}

/** FilePicker */
export type FilePickerValidator = (file: File) => boolean;

export interface FilePicker extends Omit<AllHTMLAttributes<HTMLDivElement>, "onChange"> {
  limit?: number;
  extensions?: Array<string>;
  validator?: FilePickerValidator;
  onChange?: (file: File) => void;
}

export interface FilePickerDialog extends FilePicker {
  helper: DialogHelper;
}

/** FileField */
export interface FileField
  extends Omit<FilePicker, "label" | "onChange">,
    Pick<FieldDecoration, "label" | "leading" | "trailing" | "helper"> {
  onChange?: (file: File) => void;
}

/** UseQueryParams */
export type UseQueryParamsState = {
  set: (key: string, value: string) => void;
  unset: (key: string) => void;
  [k: string]: any;
};

export type UseQueryParams = () => UseQueryParamsState;

/** UseCountdown */
export type UseCountdownState = [number, boolean, () => void, () => void];

export type UseCountdown = (countdown: number) => UseCountdownState;

/** UseWindowBreakpoints */
export interface UseWindowBreakpointsState {
  width: number;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
}

export type UseWindowBreakpoints = () => UseWindowBreakpointsState;

/** Debounce */
export type Debounce = (label: string, callback: Function, delay: number) => void;

/** UseInfiniteList */
export type InfiniteListLoadMoreTrigger = (resetPage?: boolean) => void;

export type InfiniteListOnLoadMore = (newItems: Array<any>, totalCount: number) => void;

export type InfiniteListOnLoadFailed = () => void;

export type UseInfiniteListState = [
  itemList: Array<any>,
  currentPageNumber: number,
  totalItemsInSource: number,
  triggeredLoadMore: boolean,
  loadMore: InfiniteListLoadMoreTrigger,
  onLoadMoreSuccess: InfiniteListOnLoadMore,
  onLoadMoreFailed: InfiniteListOnLoadFailed
];

export type UseInfiniteList = () => UseInfiniteListState;
